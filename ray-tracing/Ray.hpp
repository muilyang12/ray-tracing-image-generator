#pragma once

#include "Vector.hpp"

class Ray
{
public:
  Vector3f origin;
  Vector3f direction, direction_inv;

  double t;
  double t_min, t_max;

  Ray(const Vector3f &o, const Vector3f &d, const double _t = 0.0)
      : origin(o), direction(d), t(_t)
  {
    direction_inv = Vector3f(1. / direction.x, 1. / direction.y, 1. / direction.z);
    t_min = 0.0;
    t_max = std::numeric_limits<double>::max();
  }
};