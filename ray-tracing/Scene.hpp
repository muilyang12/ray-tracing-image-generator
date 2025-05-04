#pragma once

#include <vector>

#include "Vector.hpp"
#include "BVHTree.hpp"
#include "Object.hpp"
#include "Light.hpp"
#include "Ray.hpp"

class Scene
{
public:
  Vector3f ambientLight = Vector3f(0.1f, 0.1f, 0.1f);
  Vector3f backgroundColor = Vector3f(0.866f, 0.866f, 0.866f);

  void addObject(Object *object) { objects.push_back(object); }
  void addLight(std::unique_ptr<Light> light) { lights.push_back(std::move(light)); }

  const std::vector<Object *> &getObjects() const { return objects; }
  const std::vector<std::unique_ptr<Light>> &getLights() const { return lights; }

  void buildBVH();

  Intersection bvhIntersect(const Ray &ray) const;

private:
  int maxDepth = 5;

  std::vector<Object *> objects;
  std::vector<std::unique_ptr<Light>> lights;

  BVHTree *bvh = nullptr;
};