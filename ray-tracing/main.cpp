#include <emscripten/bind.h>
#include <stdio.h>

#include "global.hpp"
#include "Vector.hpp"
#include "Triangle.hpp"
#include "Camera.hpp"
#include "Scene.hpp"
#include "RayTracer.hpp"
#include "Renderer.hpp"

inline uint8_t toByte(float c)
{
    return (uint8_t)clamp(c * 255.f, 0.f, 255.f);
}

emscripten::val rayTracing(emscripten::val fileNameJs, emscripten::val widthJs, emscripten::val heightJs, emscripten::val cameraPositionJs, emscripten::val modelCenterJs, emscripten::val boundingSphereRadiusJs)
{
    Vector3f cameraPosition(cameraPositionJs["x"].as<float>(), cameraPositionJs["y"].as<float>(), cameraPositionJs["z"].as<float>());
    Vector3f modelCenter(modelCenterJs["x"].as<float>(), modelCenterJs["y"].as<float>(), modelCenterJs["z"].as<float>());
    float boundingSphereRadius(boundingSphereRadiusJs.as<float>());
    std::string fileName = fileNameJs.as<std::string>();
    int width = widthJs.as<int>();
    int height = heightJs.as<int>();

    Camera camera(static_cast<float>(width) / height, 90.f, cameraPosition, modelCenter);
    Scene scene;

    MeshTriangle modelMesh;
    modelMesh.loadFile(fileName);

    scene.addObject(&modelMesh);
    scene.addLight(std::make_unique<Light>(modelCenter + 2 * Vector3f(boundingSphereRadius, boundingSphereRadius, boundingSphereRadius), 2));
    scene.addLight(std::make_unique<Light>(modelCenter - 2 * Vector3f(boundingSphereRadius, boundingSphereRadius, boundingSphereRadius), 2));

    scene.buildBVH();

    RayTracer rayTracer(scene);

    Renderer renderer(width, height);
    std::vector<Vector3f> framebuffer = renderer.Render(camera, rayTracer);

    size_t pixelCount = framebuffer.size();
    std::vector<uint8_t> rgba(pixelCount * 4);

    for (size_t i = 0; i < pixelCount; ++i)
    {
        const Vector3f &c = framebuffer[i];
        rgba[4 * i + 0] = toByte(c.x);
        rgba[4 * i + 1] = toByte(c.y);
        rgba[4 * i + 2] = toByte(c.z);
        rgba[4 * i + 3] = 255;
    }

    emscripten::val Uint8Array = emscripten::val::global("Uint8Array");
    emscripten::val imageData = Uint8Array.new_(emscripten::typed_memory_view(rgba.size(), rgba.data()));

    emscripten::val result = emscripten::val::object();

    result.set("data", imageData);
    result.set("width", width);
    result.set("height", height);

    return result;
}

EMSCRIPTEN_BINDINGS(rayTracingModule)
{
    emscripten::function("rayTracing", &rayTracing);
}