#pragma once

#include <stdio.h>
#include <array>
#include <cassert>

#include "Object.hpp"
#include "OBJ_Loader.hpp"
#include "BVHTree.hpp"
#include "Material.hpp"
#include "Intersection.hpp"

bool rayTriangleIntersect(const Vector3f &v0, const Vector3f &v1,
                          const Vector3f &v2, const Vector3f &origin,
                          const Vector3f &dir, float &tNear, float &u,
                          float &v)
{
  Vector3f edge1 = v1 - v0;
  Vector3f edge2 = v2 - v0;
  Vector3f pVector = crossProduct(dir, edge2);

  float det = dotProduct(edge1, pVector);
  if (det == 0 || det < 0)
    return false;

  Vector3f tVector = origin - v0;

  u = dotProduct(tVector, pVector);
  if (u < 0 || u > det)
    return false;

  Vector3f qVector = crossProduct(tVector, edge1);

  v = dotProduct(dir, qVector);
  if (v < 0 || u + v > det)
    return false;

  float invDet = 1 / det;

  tNear = dotProduct(edge2, qVector) * invDet;
  u *= invDet;
  v *= invDet;

  return true;
}

class Triangle : public Object
{
public:
  Vector3f v0, v1, v2;
  Vector3f e1, e2;
  Vector3f normal;
  Material *material;

  Triangle(Vector3f _v0, Vector3f _v1, Vector3f _v2, Material *_m = nullptr)
      : v0(_v0), v1(_v1), v2(_v2), material(_m)
  {
    e1 = v1 - v0;
    e2 = v2 - v0;

    normal = normalize(crossProduct(e1, e2));
  }

  bool intersect(const Ray &ray) override;
  bool intersect(const Ray &ray, float &tnear, uint32_t &index) const override;
  Intersection getIntersection(Ray ray) override;

  void getSurfaceProperties(const Vector3f &P, const Vector3f &I,
                            const uint32_t &index, const Vector2f &uv,
                            Vector3f &N, Vector2f &st) const override
  {
    N = normal;
  }

  Vector3f evalDiffuseColor(const Vector2f &) const override;

  Bounds3 getBounds() override;
};

class MeshTriangle : public Object
{
public:
  Bounds3 bounding_box;
  std::unique_ptr<Vector3f[]> vertices;
  std::unique_ptr<uint32_t[]> vertexIndex;
  std::unique_ptr<Vector2f[]> stCoordinates;

  std::vector<Triangle> triangles;

  uint32_t numTriangles;

  BVHTree *bvh;
  Material *material;

  MeshTriangle() = default;

  void loadFile(const std::string &filename)
  {
    ObjLoader::Loader loader;
    loader.LoadFile(filename);

    assert(loader.LoadedMeshes.size() == 1);

    auto mesh = loader.LoadedMeshes[0];

    std::cout << "Number of vertices: " << mesh.Vertices.size() << std::endl;

    Vector3f min_vert = Vector3f{std::numeric_limits<float>::infinity(),
                                 std::numeric_limits<float>::infinity(),
                                 std::numeric_limits<float>::infinity()};
    Vector3f max_vert = Vector3f{-std::numeric_limits<float>::infinity(),
                                 -std::numeric_limits<float>::infinity(),
                                 -std::numeric_limits<float>::infinity()};

    for (int i = 0; i < mesh.Vertices.size(); i += 3)
    {
      std::array<Vector3f, 3> face_vertices;
      for (int j = 0; j < 3; j++)
      {
        auto vert = Vector3f(mesh.Vertices[i + j].Position.X,
                             mesh.Vertices[i + j].Position.Y,
                             mesh.Vertices[i + j].Position.Z);
        face_vertices[j] = vert;

        min_vert =
            Vector3f(std::min(min_vert.x, vert.x), std::min(min_vert.y, vert.y),
                     std::min(min_vert.z, vert.z));
        max_vert =
            Vector3f(std::max(max_vert.x, vert.x), std::max(max_vert.y, vert.y),
                     std::max(max_vert.z, vert.z));
      }

      auto new_mat = new Material(MaterialType::DIFFUSE_AND_GLOSSY,
                                  Vector3f(0.5, 0.5, 0.5), Vector3f(0, 0, 0));
      new_mat->Kd = 0.6;
      new_mat->Ks = 0.0;
      new_mat->specularExponent = 0;

      triangles.emplace_back(face_vertices[0], face_vertices[1],
                             face_vertices[2], new_mat);
    }

    bounding_box = Bounds3(min_vert, max_vert);

    std::vector<Object *> ptrs;
    for (auto &tri : triangles)
      ptrs.push_back(&tri);

    bvh = new BVHTree(ptrs);
  }

  bool intersect(const Ray &ray) { return true; }

  bool intersect(const Ray &ray, float &tnear, uint32_t &index) const
  {
    bool intersect = false;
    for (uint32_t k = 0; k < numTriangles; ++k)
    {
      const Vector3f &v0 = vertices[vertexIndex[k * 3]];
      const Vector3f &v1 = vertices[vertexIndex[k * 3 + 1]];
      const Vector3f &v2 = vertices[vertexIndex[k * 3 + 2]];

      float t, u, v;

      if (rayTriangleIntersect(v0, v1, v2, ray.origin, ray.direction, t, u, v) && t < tnear)
      {
        tnear = t;
        index = k;
        intersect |= true;
      }
    }

    return intersect;
  }

  Bounds3 getBounds() { return bounding_box; }

  void getSurfaceProperties(const Vector3f &P, const Vector3f &I,
                            const uint32_t &index, const Vector2f &uv,
                            Vector3f &N, Vector2f &st) const
  {
    const Vector3f &v0 = vertices[vertexIndex[index * 3]];
    const Vector3f &v1 = vertices[vertexIndex[index * 3 + 1]];
    const Vector3f &v2 = vertices[vertexIndex[index * 3 + 2]];

    Vector3f e0 = normalize(v1 - v0);
    Vector3f e1 = normalize(v2 - v1);

    N = normalize(crossProduct(e0, e1));

    const Vector2f &st0 = stCoordinates[vertexIndex[index * 3]];
    const Vector2f &st1 = stCoordinates[vertexIndex[index * 3 + 1]];
    const Vector2f &st2 = stCoordinates[vertexIndex[index * 3 + 2]];

    st = st0 * (1 - uv.x - uv.y) + st1 * uv.x + st2 * uv.y;
  }

  Vector3f evalDiffuseColor(const Vector2f &st) const
  {
    float scale = 5;
    float pattern =
        (fmodf(st.x * scale, 1) > 0.5) ^ (fmodf(st.y * scale, 1) > 0.5);
    return lerp(Vector3f(0.815, 0.235, 0.031), Vector3f(0.937, 0.937, 0.231),
                pattern);
  }

  Intersection getIntersection(Ray ray)
  {
    Intersection intersec;

    if (bvh)
    {
      intersec = bvh->intersect(ray);
    }

    return intersec;
  }
};

inline bool Triangle::intersect(const Ray &ray) { return true; }
inline bool Triangle::intersect(const Ray &ray, float &tnear,
                                uint32_t &index) const
{
  return false;
}

inline Bounds3 Triangle::getBounds() { return Union(Bounds3(v0, v1), v2); }

inline Intersection Triangle::getIntersection(Ray ray)
{
  Intersection intersection;

  const float EPS = 1e-6f;

  Vector3f pVec = crossProduct(ray.direction, e2);
  float determinant = dotProduct(e1, pVec);
  if (fabs(determinant) < EPS)
    return intersection;

  float invDeterminant = 1.f / determinant;

  Vector3f tvec = ray.origin - v0;
  float u = dotProduct(tvec, pVec) * invDeterminant;
  if (u < 0.f || u > 1.f)
    return intersection;

  Vector3f qvec = crossProduct(tvec, e1);
  float v = dotProduct(ray.direction, qvec) * invDeterminant;
  if (v < 0.f || u + v > 1.f)
    return intersection;

  float t = dotProduct(e2, qvec) * invDeterminant;
  if (t < EPS)
    return intersection;

  intersection.happened = true;
  intersection.coords = ray.origin + ray.direction * t;
  intersection.normal = normal;
  intersection.distance = t;
  intersection.obj = this;
  intersection.material = material;

  return intersection;
}

inline Vector3f Triangle::evalDiffuseColor(const Vector2f &) const
{
  return Vector3f(0.5, 0.5, 0.5);
}