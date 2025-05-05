import { useEffect, useRef, useState } from "react";
import ObjViewer from "./components/ObjViewer";
import { useCameraPositionStore } from "./stores/useCameraPositionStore";
import { useModelDataStore } from "./stores/useModelDataStore.js";
import RayTracingFactory from "./wasm/ray-tracing.js";
import defaultModelUrl from "./assets/bunny.obj?url";

import "./App.css";

const WIDTH = 500;
const HEIGHT = 500;

function App() {
  const position = useCameraPositionStore((state) => state.position);
  const modelCenter = useModelDataStore((state) => state.modelCenter);
  const boundingSphereRadius = useModelDataStore((state) => state.boundingSphereRadius);

  const [file, setFile] = useState<File>();

  const rayTracingRef = useRef<any>(null);
  const [isWasmReady, setIsWasmReady] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isGuidanceShowing, setIsGuidanceShowing] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsGuidanceShowing(false);

      return () => {
        clearTimeout(timer);
      };
    }, 3000);
  }, []);

  const handleClickUploadButton = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".obj";

    input.addEventListener("change", (e: Event) => {
      const target = e.target as HTMLInputElement;

      if (!target.files || target.files.length == 0) {
        setFile(undefined);

        return;
      }

      const newFile = target.files[0];
      setFile(newFile);

      document.body.removeChild(input);
    });

    input.style.display = "none";
    document.body.appendChild(input);

    input.click();
  };

  const handleClickUseDefaultButton = async () => {
    const response = await fetch(defaultModelUrl);
    const blob = await response.blob();
    const objFile = new File([blob], "bunny.obj", { type: blob.type });

    setFile(objFile);
  };

  useEffect(() => {
    const loadWasm = async () => {
      const rayTracing = await RayTracingFactory();
      rayTracingRef.current = rayTracing;
      setIsWasmReady(true);
    };

    loadWasm();
  }, []);

  const handleClickGenerate = () => {
    if (!file || !rayTracingRef.current || !canvasRef.current) return;
    if (!position || !modelCenter) return;

    const wasmFileSystem = rayTracingRef.current.FS;

    const reader = new FileReader();
    reader.onload = () => {
      if (!file || !rayTracingRef.current || !canvasRef.current) return;
      if (!reader.result || !(reader.result instanceof ArrayBuffer)) return;

      const fileData = new Uint8Array(reader.result);

      wasmFileSystem.writeFile(`/${file.name}`, fileData, { canOwn: true });

      const {
        width,
        height,
        data: _imageData,
      } = rayTracingRef.current.rayTracing(
        file.name,
        WIDTH,
        HEIGHT,
        position,
        modelCenter,
        boundingSphereRadius
      );
      const imageData = new Uint8ClampedArray(_imageData);

      canvasRef.current.width = width;
      canvasRef.current.height = height;
      canvasRef.current.style.width = width;
      canvasRef.current.style.height = height;

      const canvasContext = canvasRef.current.getContext("2d");
      const image = new ImageData(imageData, width, height);
      canvasContext?.putImageData(image, 0, 0);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <>
      <div>
        {"Upload .obj file: "}
        <button onClick={handleClickUploadButton}>Upload</button>
      </div>
      <br />
      <div>
        {"Try with a default model: "}
        <button onClick={handleClickUseDefaultButton}>Try</button>
      </div>

      {file && (
        <>
          <div style={{ position: "relative" }}>
            <ObjViewer file={file} width={WIDTH} height={HEIGHT} />
            <div className={isGuidanceShowing ? "visible" : "invisible"}>Drag to rotate</div>
          </div>
          <div>
            <button onClick={handleClickGenerate} disabled={!isWasmReady}>
              Generate
            </button>
          </div>
          <br />
          <canvas ref={canvasRef} />
        </>
      )}
    </>
  );
}

export default App;
