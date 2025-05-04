import { ChangeEvent, useEffect, useRef, useState } from "react";
import ObjViewer from "./components/ObjViewer";
import { useCameraPositionStore } from "./stores/useCameraPositionStore";
import { useModelCenterStore } from "./stores/useModelCenterStore.js";
import RayTracingFactory from "./wasm/ray-tracing.js";

import "./App.css";

function App() {
  const position = useCameraPositionStore((state) => state.position);
  const center = useModelCenterStore((state) => state.center);

  const [file, setFile] = useState<File>();

  const rayTracingRef = useRef<any>(null);
  const [isWasmReady, setIsWasmReady] = useState<boolean>(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length == 0) {
      setFile(undefined);

      return;
    }

    const newFile = e.target.files[0];
    setFile(newFile);
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
    if (!position || !center) return;

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
        {
          x: position.x,
          y: position.y,
          z: position.z,
        },
        { x: center.x, y: center.y, z: center.z }
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
      <input type="file" id="obj-uploader" accept=".obj" onChange={handleFileChange} />
      {file && (
        <>
          <ObjViewer file={file} />

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
