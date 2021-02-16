import create from "zustand";

const useCameraControllerStore = create((set) => ({
  enabled: true
}));

export default useCameraControllerStore;
