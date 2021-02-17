import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { MapControls, Stats } from "@react-three/drei";
import "./styles.css";

const Sphere = (props) => {
  return (
    <mesh position={props.position}>
      <sphereBufferGeometry args={[0.25, 24, 24]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

function Grid() {
  const x = 10;
  const y = 10;

  const spheres = Array(x * y)
    .fill()
    .map((s, i) => {
      return (
        <Sphere
          position={[x * -0.5 + Math.floor(i / x), y * -0.5 + (i % y), 0]}
        />
      );
    });

  return spheres;
}

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <pointLight position={[5, 5, 5]} />
      <Grid />
      <MapControls screenSpacePanning />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
