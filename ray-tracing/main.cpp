#include <emscripten/bind.h>

int add(int a, int b)
{
    return a + b;
}

int square(int a)
{
    return a * a;
}

EMSCRIPTEN_BINDINGS(rayTracingModule)
{
    emscripten::function("add", &add);
    emscripten::function("square", &square);
}