#include "Renderer.hpp"

std::vector<Vector3f> Renderer::Render(const Camera &camera, const RayTracer &rayTracer)
{
  Vector3f forward = normalize(camera.target - camera.position);
  Vector3f worldUp(0.0f, 1.0f, 0.0f);
  Vector3f right = normalize(crossProduct(forward, worldUp));
  Vector3f up = normalize(crossProduct(right, forward));

  std::vector<Vector3f> framebuffer(width * height);

  float scale = tan(deg2rad(camera.fov * 0.5f));
  float imageAspectRatio = width / float(height);
  int m = 0;

  for (uint32_t j = 0; j < height; ++j)
  {
    for (uint32_t i = 0; i < width; ++i)
    {
      float px = i + 0.5f;
      float py = j + 0.5f;

      float nx = (2 * px / width) - 1;
      float ny = 1 - (2 * py / height);

      float x = nx * imageAspectRatio * scale;
      float y = ny * scale;

      Vector3f pixelDir = normalize(forward * 1.0f + right * x + up * y);

      framebuffer[m++] = rayTracer.castRay(Ray(camera.position, pixelDir), 0);
    }
  }

  return framebuffer;
}
