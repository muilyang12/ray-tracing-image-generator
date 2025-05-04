import { create } from "zustand";
import { Vector3 } from "three";

interface ModelCenterState {
  center?: Vector3;
  setCenter: (newCenter?: Vector3) => void;
}

export const useModelCenterStore = create<ModelCenterState>((set) => ({
  center: undefined,
  setCenter: (newCenter?: Vector3) => {
    set({ center: newCenter?.clone() });
  },
}));
