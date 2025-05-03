import { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";

interface ObjViewerProps {
  file: File;
}

function ObjViewer({ file }: ObjViewerProps) {
  const objViewerWrapperRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>(null);

  const loadObj = useCallback((file: File) => {
    if (!sceneRef.current) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (!sceneRef.current || !cameraRef.current) return;

      const fileData = fileReader.result;
      if (typeof fileData !== "string") return;

      const objLoader = new OBJLoader();
      const objFile = objLoader.parse(fileData);

      sceneRef.current.add(objFile);
    };
    fileReader.readAsText(file);
  }, []);

  useEffect(() => {
    if (!objViewerWrapperRef.current) return;

    const width = objViewerWrapperRef.current.clientWidth;
    const height = objViewerWrapperRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 1000);
    camera.position.set(-0.1, 0.5, 1);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    objViewerWrapperRef.current.appendChild(renderer.domElement);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1);
    const dirLight2 = new THREE.DirectionalLight(0xffffff, 1);
    dirLight1.position.set(-20, 70, 20);
    dirLight2.position.set(20, 70, 20);

    scene.add(dirLight1);
    scene.add(dirLight2);

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
      objViewerWrapperRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    if (!file) return;

    loadObj(file);
  }, [file]);

  return <div ref={objViewerWrapperRef} style={{ width: "500px", height: "500px" }} />;
}

export default ObjViewer;
