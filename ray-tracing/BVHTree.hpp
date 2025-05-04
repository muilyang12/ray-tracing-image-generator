#pragma once

#include <memory>
#include <vector>

#include "Vector.hpp"
#include "Bounds3.hpp"
#include "Object.hpp"
#include "Ray.hpp"
#include "Intersection.hpp"

struct BVHBuildNode;

class BVHTree
{
public:
  BVHBuildNode *root = nullptr;

  BVHTree(std::vector<Object *> p);
  ~BVHTree();

  Intersection intersect(const Ray &ray) const;

private:
  const int maxPrimsPerNode = 1;

  BVHBuildNode *buildRecursive(std::vector<Object *> objects);

  Intersection intersectNode(BVHBuildNode *node, const Ray &ray) const;

  std::vector<Object *> primitives;
};

struct BVHBuildNode
{
  Bounds3 bounds;
  BVHBuildNode *left = nullptr;
  BVHBuildNode *right = nullptr;
  Object *object = nullptr;

  int splitAxis = 0;
  int firstPrimitiveOffset = 0;
  int numPrimitives = 0;

  BVHBuildNode() = default;
};