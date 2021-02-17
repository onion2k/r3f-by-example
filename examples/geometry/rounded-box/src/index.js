import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats, RoundedBox } from "@react-three/drei";
import "./styles.css";

const App = () => {
  return (
    <Canvas style={{ height: 600, width: 600 }}>
      <pointLight position={[5, 5, 5]} />
      <RoundedBox args={[3, 3, 0.25]} radius={0.1}>
        <meshLambertMaterial attach="material" color={"grey"} />
      </RoundedBox>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
