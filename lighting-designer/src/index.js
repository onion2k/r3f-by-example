import React, { Suspense, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import useCameraControllerStore from "./controllerStore";
import TransformableLight from "./transformableLight";
import { Ground } from "./scene";
import Car from "./car";
import "./styles.css";

const Camera = () => {
  const enabled = useCameraControllerStore((state) => state.enabled);
  const camRef = useRef();
  useEffect(() => {
    camRef.current.enabled = enabled;
  }, [enabled]);
  return <OrbitControls ref={camRef} />;
};

const App = () => {
  return (
    <Canvas
      camera={{ position: [20, 20, 0] }}
      shadowMap
    >
      <color attach={"background"} args={"black"} />
      <TransformableLight position={[-5, 9, 5]} intensity={0.7} />
      <TransformableLight position={[5, 5, -10]} intensity={0.7} />
      <TransformableLight position={[5, 15, -10]} intensity={0.3} />
      <Suspense fallback={null}>
        <Ground />
        <Car scale={[3, 3, 3]} position={[0, -0.35, 0]} />
      </Suspense>
      <Camera />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
