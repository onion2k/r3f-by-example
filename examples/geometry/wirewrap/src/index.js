import React from "react";
import * as THREE from "three";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import "./styles.css";

const Wirewrap = () => {
  const base = new THREE.IcosahedronGeometry(3, 7);
  const curveVertices = base.vertices.map(function (handlePos, i) {
    return new THREE.Vector3(handlePos.x, handlePos.y, handlePos.z);
  });

  const curve = new THREE.CatmullRomCurve3(curveVertices);
  curve.curveType = "centripetal";
  curve.tension = 1.0;
  curve.closed = true;

  const extruded = new THREE.TubeGeometry(
    curve,
    base.vertices.length * 15,
    0.05,
    18,
    true
  );

  const wire = (
    <mesh geometry={extruded}>
      <meshPhongMaterial color={"#FF69B4"} />
    </mesh>
  );

  return wire;
};

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.7} />
      <Wirewrap />
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
