import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import "./styles.css";

const Box = (props) => {
  const boxRef = useRef();
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  useFrame(() => {
    if (hover) {
      boxRef.current.rotation.y += 0.05;
    }
  });

  return (
    <group ref={boxRef} position={props.position}>
      <mesh
        onClick={() => {
          setActive(!active);
        }}
        onPointerOver={() => {
          setHover(true);
        }}
        onPointerOut={() => {
          setHover(false);
        }}
      >
        <boxGeometry attach="geometry" />
        <meshLambertMaterial
          attach="material"
          color={active ? "green" : "red"}
        />
      </mesh>
    </group>
  );
};

const App = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
      camera={{ fov: 55, position: [0, 2, 2] }}
    >
      <ambientLight intensity={0.1} />
      <pointLight position={[5, 5, 5]} />
      <Box />
      <OrbitControls />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
