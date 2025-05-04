#pragma once

#include "Vector.hpp"

enum MaterialType
{
  DIFFUSE_AND_GLOSSY,
  REFLECTION_AND_REFRACTION,
  REFLECTION
};

class Material
{
public:
  MaterialType type;
  Vector3f color;
  Vector3f emission;

  float ior = 1.0f; // Index of refraction
  float Kd = 0.0f;  // Diffuse coefficient
  float Ks = 0.0f;  // Specular coefficient
  float specularExponent = 0.0f;

  inline Material(MaterialType t = MaterialType::DIFFUSE_AND_GLOSSY,
                  const Vector3f &c = Vector3f(1.0f),
                  const Vector3f &e = Vector3f(0.0f)) : type(t), color(c), emission(e) {}

  inline MaterialType getType() const { return type; }
  inline Vector3f getColor() const { return color; }
  inline Vector3f getEmission() const { return emission; }
};
