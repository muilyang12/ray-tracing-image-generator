#include "Scene.hpp"

void Scene::buildBVH()
{
  this->bvh = new BVHTree(objects);
}

Intersection Scene::bvhIntersect(const Ray &ray) const
{
  return this->bvh->intersect(ray);
}