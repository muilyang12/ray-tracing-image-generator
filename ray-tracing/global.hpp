#pragma once

#include <cmath>
#include <iostream>
#include <random>

const float PI = 3.1415927f;
const float EPSILON = 0.00001f;
const float kInfinity = std::numeric_limits<float>::max();

inline float deg2rad(const float &deg)
{
  return deg * PI / 180.0;
}

inline float clamp(const float &value, const float &low, const float &high)
{
  return std::max(low, std::min(value, high));
}
