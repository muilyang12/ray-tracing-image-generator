#pragma once

#include <array>
#include <limits>

#include "Vector.hpp"
#include "Ray.hpp"

class Bounds3
{
public:
  Vector3f min;
  Vector3f max;

  Bounds3()
  {
    double lowest = std::numeric_limits<double>::lowest();
    double highest = std::numeric_limits<double>::max();
    max = Vector3f(lowest, lowest, lowest);
    min = Vector3f(highest, highest, highest);
  }

  Bounds3(const Vector3f &p) : min(p), max(p) {}

  Bounds3(const Vector3f &p1, const Vector3f &p2)
  {
    min = Vector3f(fmin(p1.x, p2.x), fmin(p1.y, p2.y), fmin(p1.z, p2.z));
    max = Vector3f(fmax(p1.x, p2.x), fmax(p1.y, p2.y), fmax(p1.z, p2.z));
  }

  Vector3f getDiagonal() const
  {
    return max - min;
  }

  int maxExtent() const
  {
    Vector3f diagonal = getDiagonal();

    if (diagonal.x > diagonal.y && diagonal.x > diagonal.z)
      return 0;
    else if (diagonal.y > diagonal.z)
      return 1;
    else
      return 2;
  }

  double getSurfaceArea() const
  {
    Vector3f diagonal = getDiagonal();

    return 2 * (diagonal.x * diagonal.y + diagonal.x * diagonal.z + diagonal.y * diagonal.z);
  }

  Vector3f getCentroid() const
  {
    return 0.5 * min + 0.5 * max;
  }

  Bounds3 intersect(const Bounds3 &other) const
  {
    return Bounds3(
        Vector3f(fmax(min.x, other.min.x), fmax(min.y, other.min.y), fmax(min.z, other.min.z)),
        Vector3f(fmin(max.x, other.max.x), fmin(max.y, other.max.y), fmin(max.z, other.max.z)));
  }

  Vector3f offset(const Vector3f &point) const
  {
    Vector3f o = point - min;
    if (max.x > min.x)
      o.x /= max.x - min.x;
    if (max.y > min.y)
      o.y /= max.y - min.y;
    if (max.z > min.z)
      o.z /= max.z - min.z;
    return o;
  }

  bool overlaps(const Bounds3 &a, const Bounds3 &b) const
  {
    bool x = (a.max.x >= b.min.x) && (a.min.x <= b.max.x);
    bool y = (a.max.y >= b.min.y) && (a.min.y <= b.max.y);
    bool z = (a.max.z >= b.min.z) && (a.min.z <= b.max.z);
    return x && y && z;
  }

  bool contains(const Vector3f &point, const Bounds3 &box) const
  {
    return (point.x >= box.min.x && point.x <= box.max.x &&
            point.y >= box.min.y && point.y <= box.max.y &&
            point.z >= box.min.z && point.z <= box.max.z);
  }

  inline const Vector3f &operator[](int i) const
  {
    return (i == 0) ? min : max;
  }

  inline bool intersectRay(const Ray &ray, const Vector3f &invDir, const std::array<int, 3> &dirIsNeg) const;
};

inline bool Bounds3::intersectRay(const Ray &ray, const Vector3f &invDir, const std::array<int, 3> &dirIsNeg) const
{
  double tMin = -std::numeric_limits<double>::infinity();
  double tMax = std::numeric_limits<double>::infinity();

  for (int i = 0; i < 3; i++)
  {
    double t0 = (min[i] - ray.origin[i]) * invDir[i];
    double t1 = (max[i] - ray.origin[i]) * invDir[i];

    if (!dirIsNeg[i])
      std::swap(t0, t1);

    tMin = std::max(tMin, t0);
    tMax = std::min(tMax, t1);

    if (tMax < tMin)
      return false;
  }

  return true;
}

inline Bounds3 Union(const Bounds3 &a, const Bounds3 &b)
{
  Bounds3 result;
  result.min = Vector3f::Min(a.min, b.min);
  result.max = Vector3f::Max(a.max, b.max);
  return result;
}

inline Bounds3 Union(const Bounds3 &box, const Vector3f &point)
{
  Bounds3 result;
  result.min = Vector3f::Min(box.min, point);
  result.max = Vector3f::Max(box.max, point);
  return result;
}
