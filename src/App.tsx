import { ChangeEvent, useState } from "react";
import ObjViewer from "./components/ObjViewer";
import { useCameraPositionStore } from "./stores/useCameraPositionStore";

import "./App.css";

function App() {
  const position = useCameraPositionStore((state) => state.position);

  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length == 0) {
      setFile(undefined);

      return;
    }

    const newFile = e.target.files[0];
    setFile(newFile);
  };

  return (
    <>
      <input type="file" id="obj-uploader" accept=".obj" onChange={handleFileChange} />

      {file && <ObjViewer file={file} />}

      {position && (
        <span>{`${position.x.toFixed(5)},
                ${position.y.toFixed(5)},
                ${position.z.toFixed(5)}`}</span>
      )}
    </>
  );
}

export default App;
