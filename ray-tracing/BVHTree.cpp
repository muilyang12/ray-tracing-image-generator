#include "BVHTree.hpp"

#include <algorithm>
#include <cassert>

BVHTree::BVHTree(std::vector<Object *> p) : primitives(std::move(p))
{
  if (primitives.empty())
    return;

  root = buildRecursive(primitives);
}

BVHBuildNode *BVHTree::buildRecursive(std::vector<Object *> objects)
{
  BVHBuildNode *node = new BVHBuildNode();

  Bounds3 bbox;
  for (auto *obj : objects)
    bbox = Union(bbox, obj->getBounds());

  if (static_cast<int>(objects.size()) <= maxPrimsPerNode)
  {
    node->bounds = bbox;
    node->object = objects[0];
    node->numPrimitives = static_cast<int>(objects.size());
    return node;
  }

  Bounds3 centroidBounds;
  for (auto *obj : objects)
    centroidBounds = Union(centroidBounds, obj->getBounds().getCentroid());
  int axis = centroidBounds.maxExtent();

  std::sort(objects.begin(), objects.end(),
            [axis](Object *a, Object *b)
            {
              return a->getBounds().getCentroid()[axis] < b->getBounds().getCentroid()[axis];
            });

  size_t mid = objects.size() / 2;
  std::vector<Object *> leftList(objects.begin(), objects.begin() + mid);
  std::vector<Object *> rightList(objects.begin() + mid, objects.end());

  node->left = buildRecursive(leftList);
  node->right = buildRecursive(rightList);
  node->bounds = Union(node->left->bounds, node->right->bounds);

  return node;
}

Intersection BVHTree::intersect(const Ray &ray) const
{
  Intersection intersection;

  if (!root)
    return intersection;

  intersection = BVHTree::intersectNode(root, ray);
  return intersection;
}

Intersection BVHTree::intersectNode(BVHBuildNode *node,
                                    const Ray &ray) const
{
  Intersection intersect;

  if (node == nullptr)
    return intersect;

  Vector3f invDir = ray.direction_inv;
  std::array<int, 3> dirIsNeg;
  dirIsNeg[0] = (ray.direction.x > 0) ? 1 : 0;
  dirIsNeg[1] = (ray.direction.y > 0) ? 1 : 0;
  dirIsNeg[2] = (ray.direction.z > 0) ? 1 : 0;

  // Check if there is ray intersects
  if (!node->bounds.intersectRay(ray, invDir, dirIsNeg))
  {
    return intersect;
  }

  // If it is a leaf node, intersect with the object
  if (node->left == nullptr && node->right == nullptr)
  {
    return node->object->getIntersection(ray);
  }

  // Recursively traverse the BVH to find intersection
  Intersection hitLeft = intersectNode(node->left, ray);
  Intersection hitRight = intersectNode(node->right, ray);

  // Return the closer intersection
  if (hitLeft.happened && hitRight.happened)
  {
    return (hitLeft.distance < hitRight.distance) ? hitLeft : hitRight;
  }
  else if (hitLeft.happened)
  {
    return hitLeft;
  }
  else if (hitRight.happened)
  {
    return hitRight;
  }

  return intersect;
}
