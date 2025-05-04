#pragma once

#include "Scene.hpp"

class RayTracer
{
public:
    RayTracer(const Scene &s) : scene(s) {}

    Vector3f castRay(const Ray &ray, int currentDepth) const;

private:
    const Scene &scene;
    int maxDepth = 5;

    Vector3f reflect(const Vector3f &incidentDir, const Vector3f &surfaceNormal) const;
    Vector3f refract(const Vector3f &incidentDir, const Vector3f &surfaceNormal, const float &indexOfRefraction) const;
    void fresnel(const Vector3f &incidentDir, const Vector3f &surfaceNormal, const float &indexOfRefraction, float &reflectanceRatio) const;
};