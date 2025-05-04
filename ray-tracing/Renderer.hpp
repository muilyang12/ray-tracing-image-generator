#pragma once

#include "Vector.hpp"
#include "Camera.hpp"
#include "RayTracer.hpp"

class Renderer
{
public:
  int width = 500;
  int height = 500;

  Renderer(int w, int h) : width(w), height(h) {}

  std::vector<Vector3f> Render(const Camera &camera, const RayTracer &rayTracer);
};
