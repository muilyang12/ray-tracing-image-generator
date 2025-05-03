import { create } from "zustand";
import { Vector3 } from "three";

interface CameraPositionState {
  position?: Vector3;
  setPosition: (newPosition?: Vector3) => void;
}

export const useCameraPositionStore = create<CameraPositionState>((set) => ({
  position: undefined,
  setPosition: (newPosition?: Vector3) => {
    set({ position: newPosition?.clone() });
  },
}));
