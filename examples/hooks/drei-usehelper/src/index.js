import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, Stats, useHelper } from "@react-three/drei";
import { BoxHelper } from "three";
import { VertexNormalsHelper } from "three/examples/jsm/helpers/VertexNormalsHelper";
import { FaceNormalsHelper } from "three/examples/jsm/helpers/FaceNormalsHelper";
import "./styles.css";

const CubeWithHelpers = () => {
  const cubeRef = useRef();
  useHelper(cubeRef, BoxHelper, "blue");
  useHelper(cubeRef, VertexNormalsHelper, 1, "green");
  useHelper(cubeRef, FaceNormalsHelper, 0.5, "yellow");

  useFrame(() => {
    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef}>
      <cubeGeometry args={[2, 2, 2]} />
      <meshLambertMaterial color={"red"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <pointLight position={[5, 5, 5]} />
      <CubeWithHelpers />
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
