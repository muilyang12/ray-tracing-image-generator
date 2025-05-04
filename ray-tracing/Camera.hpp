#pragma once

#include "Vector.hpp"
#include "Ray.hpp"

class Camera
{
public:
    float aspectRatio;
    float fov;

    Vector3f position;
    Vector3f target;
    Vector3f up = Vector3f(0, 1, 0);

    Camera(float a, float f, const Vector3f &p, const Vector3f &t) : aspectRatio(a), fov(f),
                                                                     position(p), target(t) {}
};