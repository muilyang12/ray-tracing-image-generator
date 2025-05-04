import { create } from "zustand";
import { Vector3 } from "three";

interface ModelDataState {
  modelCenter?: Vector3;
  setModelCenter: (newCenter?: Vector3) => void;
  boundingSphereRadius?: number;
  setBoundingSphereRadius: (newRadius?: number) => void;
}

export const useModelDataStore = create<ModelDataState>((set) => ({
  modelCenter: undefined,
  setModelCenter: (newCenter?: Vector3) => {
    set({ modelCenter: newCenter?.clone() });
  },
  boundingSphereRadius: undefined,
  setBoundingSphereRadius: (newRadius?: number) => {
    set({ boundingSphereRadius: newRadius });
  },
}));
