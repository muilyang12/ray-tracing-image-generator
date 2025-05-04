#pragma once

#include <limits>

#include "Material.hpp"
#include "Vector.hpp"

class Object;

struct Intersection
{
  bool happened = false;

  Vector3f coords = Vector3f(0.0f);
  Vector3f normal = Vector3f(0.0f);
  double distance = std::numeric_limits<double>::max();

  Object *obj = nullptr;
  Material *material = nullptr;

  Intersection() = default;
};