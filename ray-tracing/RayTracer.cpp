#include "RayTracer.hpp"

/*
  Whitted-style light transport algorithm
*/
Vector3f RayTracer::castRay(const Ray &ray, int currentDepth) const
{
    if (currentDepth > this->maxDepth)
    {
        return Vector3f(0.0, 0.0, 0.0);
    }

    Intersection intersection = scene.bvhIntersect(ray);
    Vector3f surfaceColor = this->scene.backgroundColor;

    if (intersection.happened)
    {
        Material *material = intersection.material;
        Object *hitObject = intersection.obj;
        Vector3f intersectionPoint = intersection.coords;
        Vector3f surfaceNormal = intersection.normal;
        Vector2f uv;
        Vector2f textureCoordinates;
        uint32_t triangleIndex = 0;

        hitObject->getSurfaceProperties(intersectionPoint, ray.direction,
                                        triangleIndex, uv, surfaceNormal, textureCoordinates);

        switch (material->getType())
        {
        // Reflect and Refract
        case REFLECTION_AND_REFRACTION:
        {
            Vector3f reflectedDir = normalize(reflect(ray.direction, surfaceNormal));
            Vector3f refractedDir = normalize(refract(ray.direction, surfaceNormal, material->ior));

            Vector3f reflectedRayOrigin = (dotProduct(reflectedDir, surfaceNormal) < 0)
                                              ? intersectionPoint - surfaceNormal * EPSILON
                                              : intersectionPoint + surfaceNormal * EPSILON;

            Vector3f refractedRayOrigin = (dotProduct(refractedDir, surfaceNormal) < 0)
                                              ? intersectionPoint - surfaceNormal * EPSILON
                                              : intersectionPoint + surfaceNormal * EPSILON;

            Vector3f reflectedColor = castRay(Ray(reflectedRayOrigin, reflectedDir), currentDepth + 1);
            Vector3f refractedColor = castRay(Ray(refractedRayOrigin, refractedDir), currentDepth + 1);

            float reflectionRatio; // Fresnel reflectance
            fresnel(ray.direction, surfaceNormal, material->ior, reflectionRatio);

            surfaceColor = reflectedColor * reflectionRatio + refractedColor * (1.0f - reflectionRatio);
            break;
        }

        // Reflect Only
        case REFLECTION:
        {
            float reflectionRatio;
            fresnel(ray.direction, surfaceNormal, material->ior, reflectionRatio);
            Vector3f reflectedDir = normalize(reflect(ray.direction, surfaceNormal));

            Vector3f reflectedRayOrigin = (dotProduct(reflectedDir, surfaceNormal) < 0)
                                              ? intersectionPoint + surfaceNormal * EPSILON
                                              : intersectionPoint - surfaceNormal * EPSILON;

            surfaceColor = castRay(Ray(reflectedRayOrigin, reflectedDir), currentDepth + 1) * reflectionRatio;
            break;
        }

        /*
          Diffuse + Specular (Phong Illumination)

          Diffuse: Ld = Kd * lightIntensity * max(0, dot(N, L))
          Specular: Ls = Ks * lightIntensity * (max(0, dot(R, V)))^n

          N: Surface normal
          L: Light direction
          R: Reflection of -L
          V: View direction (−incoming ray direction)
          n: Specular exponent
        */
        default:
        {
            Vector3f diffuse(0), specular(0), ambient;

            for (const auto &lightPtr : scene.getLights())
            {
                auto &lightPosition = lightPtr->position;
                auto &lightIntensity = lightPtr->intensity;

                Vector3f lightDirection = normalize(lightPosition - intersectionPoint);
                float NdotL = std::max(0.0f, dotProduct(surfaceNormal, lightDirection));

                bool inShadow = scene.bvhIntersect(Ray(intersectionPoint + surfaceNormal * EPSILON, lightDirection)).happened;
                if (!inShadow)
                    diffuse += lightIntensity * NdotL;

                Vector3f reflectedLightDir = reflect(-lightDirection, surfaceNormal);
                specular += std::pow(std::max(0.0f, -dotProduct(reflectedLightDir, ray.direction)),
                                     material->specularExponent) *
                            lightIntensity;
            }

            ambient = scene.ambientLight;

            Vector3f diffCol = hitObject->evalDiffuseColor(textureCoordinates) * material->Kd;

            surfaceColor = diffCol * diffuse + material->Ks * specular + material->Kd * ambient;

            break;
        }
        }
    }

    return surfaceColor;
}

/*
  Reflect

  R = I − 2 * dot(I, N) * N

  I: Incident direction vector
  N: Surface normal vector
*/
Vector3f RayTracer::reflect(const Vector3f &incidentDir, const Vector3f &surfaceNormal) const
{
    return incidentDir - 2 * dotProduct(incidentDir, surfaceNormal) * surfaceNormal;
}

/*
  Refract (Snell's Law)

  T = η * I + (η * cos(θi) - sqrt(1 - η² * (1 - cos²(θi)))) * N

  I: Incident direction vector
  N: Surface normal vector
  η: Ratio of refractive indices (etai / etat)
*/
Vector3f RayTracer::refract(const Vector3f &incidentDir, const Vector3f &surfaceNormal,
                            const float &indexOfRefraction) const
{
    float cosIncident = clamp(-1.0f, 1.0f, dotProduct(incidentDir, surfaceNormal));
    float refractiveIndexFrom = 1.0f;
    float refractiveIndexTo = indexOfRefraction;
    Vector3f adjustedNormal = surfaceNormal;

    if (cosIncident < 0)
    {
        cosIncident = -cosIncident;
    }
    else
    {
        std::swap(refractiveIndexFrom, refractiveIndexTo);
        adjustedNormal = -surfaceNormal;
    }

    float eta = refractiveIndexFrom / refractiveIndexTo;
    float k = 1.0f - eta * eta * (1.0f - cosIncident * cosIncident);
    return k < 0 ? Vector3f(0) : eta * incidentDir + (eta * cosIncident - sqrtf(k)) * adjustedNormal;
}

/*
  Fresnel Reflectance

  kr = (Rs² + Rp²) / 2

  Rs = ((n2 * cos(θi) - n1 * cos(θt)) / (n2 * cos(θi) + n1 * cos(θt)))²
  Rp = ((n1 * cos(θi) - n2 * cos(θt)) / (n1 * cos(θi) + n2 * cos(θt)))²

  I: Incident direction vector
  N: Surface normal vector
  n1: Refractive index of the current medium
  n2: Refractive index of the next medium
*/
void RayTracer::fresnel(const Vector3f &incidentDir, const Vector3f &surfaceNormal, const float &indexOfRefraction, float &reflectanceRatio) const
{
    float cosIncident = clamp(-1.0f, 1.0f, dotProduct(incidentDir, surfaceNormal));
    float refractiveIndexFrom = 1.0f;
    float refractiveIndexTo = indexOfRefraction;

    if (cosIncident > 0)
    {
        std::swap(refractiveIndexFrom, refractiveIndexTo);
    }

    float sinTransmitted = refractiveIndexFrom / refractiveIndexTo * sqrtf(std::max(0.0f, 1.0f - cosIncident * cosIncident));

    if (sinTransmitted >= 1.0f)
    {
        reflectanceRatio = 1.0f;
    }
    else
    {
        float cosTransmitted = sqrtf(std::max(0.0f, 1.0f - sinTransmitted * sinTransmitted));
        cosIncident = fabsf(cosIncident);
        float Rs = ((refractiveIndexTo * cosIncident) - (refractiveIndexFrom * cosTransmitted)) /
                   ((refractiveIndexTo * cosIncident) + (refractiveIndexFrom * cosTransmitted));
        float Rp = ((refractiveIndexFrom * cosIncident) - (refractiveIndexTo * cosTransmitted)) /
                   ((refractiveIndexFrom * cosIncident) + (refractiveIndexTo * cosTransmitted));
        reflectanceRatio = (Rs * Rs + Rp * Rp) / 2.0f;
    }
}