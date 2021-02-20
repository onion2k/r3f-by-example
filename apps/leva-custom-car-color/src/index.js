import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { Stats, OrbitControls } from "@react-three/drei";
import { Ground } from "./scene";
import { useControls } from "leva";
import Car from "./car";
import "./styles.css";

function CustomCar() {
  const { color, metal, rough } = useControls({
    color: { r: 200, b: 125, g: 106 },
    metal: {
      value: 0.25,
      min: 0,
      max: 1,
      step: 0.01
    },
    rough: {
      value: 0.25,
      min: 0,
      max: 1,
      step: 0.01
    }
  });

  return (
    <Suspense fallback={null}>
      <Car
        scale={[3, 3, 3]}
        position={[0, -0.35, 0]}
        color={color}
        metal={metal}
        rough={rough}
      />
    </Suspense>
  );
}

const App = () => {
  return (
    <Canvas
      style={{ width: 800, height: 800 }}
      camera={{ position: [20, 20, 0] }}
      shadowMap
    >
      <color attach={"background"} args={"black"} />
      <ambientLight color={"#dddddd"} />
      <pointLight
        position={[10, 10, 10]}
        castShadow
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
        shadow-radius={10}
        shadow-bias={-0.0001}
      />
      <Ground />
      <CustomCar />
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
