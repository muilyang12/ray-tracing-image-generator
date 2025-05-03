import { useCallback, useEffect, useRef, memo } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import throttle from "lodash.throttle";
import { useCameraPositionStore } from "../stores/useCameraPositionStore";

interface ObjViewerProps {
  file: File;
}

function ObjViewer({ file }: ObjViewerProps) {
  const setPosition = useCameraPositionStore((state) => state.setPosition);
  const throttledSetPosition = throttle((pos: THREE.Vector3) => {
    setPosition(pos);
  }, 100);

  const objViewerWrapperRef = useRef<HTMLDivElement>(null);

  const sceneRef = useRef<THREE.Scene>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>(null);
  const lightsRef =
    useRef<Record<"dirLightXMinus" | "dirLightXPlus", THREE.DirectionalLight>>(null);

  const orbitControlsRef = useRef<OrbitControls>(null);

  const loadObj = useCallback((file: File) => {
    if (!sceneRef.current) return;

    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (!sceneRef.current || !cameraRef.current) return;
      if (!lightsRef.current || !orbitControlsRef.current) return;

      const fileData = fileReader.result;
      if (typeof fileData !== "string") return;

      const objLoader = new OBJLoader();
      const objFile = objLoader.parse(fileData);

      sceneRef.current.add(objFile);

      const boundingBox = new THREE.Box3().setFromObject(objFile);
      const boundingSphere = new THREE.Sphere();
      boundingBox.getBoundingSphere(boundingSphere);

      const radius = boundingSphere.radius;

      const vFov = cameraRef.current.fov * (Math.PI / 180);
      const hFov = 2 * Math.atan(cameraRef.current.aspect * Math.tan(vFov / 2));

      const vDistance = radius / Math.tan(vFov / 2);
      const hDistance = radius / Math.tan(hFov / 2);
      const distance = Math.max(vDistance, hDistance) * 1.5;

      cameraRef.current.position.copy(boundingSphere.center).add(new THREE.Vector3(0, 0, distance));
      cameraRef.current.lookAt(boundingSphere.center);

      lightsRef.current.dirLightXPlus.position
        .copy(boundingSphere.center)
        .add(new THREE.Vector3(radius, 0, 0));
      lightsRef.current.dirLightXPlus.target.position.copy(boundingSphere.center);
      lightsRef.current.dirLightXMinus.position
        .copy(boundingSphere.center)
        .add(new THREE.Vector3(-radius, 0, 0));
      lightsRef.current.dirLightXMinus.target.position.copy(boundingSphere.center);

      orbitControlsRef.current.target.copy(boundingSphere.center);
      orbitControlsRef.current.update();
    };

    fileReader.readAsText(file);
  }, []);

  useEffect(() => {
    if (!objViewerWrapperRef.current) return;

    const width = objViewerWrapperRef.current.clientWidth;
    const height = objViewerWrapperRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(90, width / height, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    objViewerWrapperRef.current.appendChild(renderer.domElement);

    const orbitControls = new OrbitControls(camera, renderer.domElement);

    const dirLightXPlus = new THREE.DirectionalLight(0xffffff, 1);
    const dirLightXMinus = new THREE.DirectionalLight(0xffffff, 1);

    scene.add(dirLightXPlus);
    scene.add(dirLightXMinus);

    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;
    lightsRef.current = {
      dirLightXPlus,
      dirLightXMinus,
    };
    orbitControlsRef.current = orbitControls;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      orbitControlsRef.current?.update();

      throttledSetPosition(cameraRef.current?.position);
    };
    animate();

    return () => {
      throttledSetPosition.unmount();
      orbitControlsRef.current?.dispose();
      rendererRef.current?.dispose();
      objViewerWrapperRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  useEffect(() => {
    if (!file) return;

    loadObj(file);
  }, [file]);

  return <div ref={objViewerWrapperRef} style={{ width: "500px", height: "500px" }} />;
}

export default memo(ObjViewer);
