import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";

const Box = (props) => {
  const boxRef = useRef();

  return (
    <mesh ref={boxRef} {...props}>
      <boxGeometry args={[100, 100, 100]} />
      <meshStandardMaterial attach="material" color={"red"} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <ambientLight intensity={0.25} />
      <pointLight intensity={0.75} position={[500, 500, 1000]} />

      <Box position={[70, 70, 0]} />
      <Box position={[-70, 70, 0]} />
      <Box position={[70, -70, 0]} />
      <Box position={[-70, -70, 0]} />

      <OrbitControls />

      <OrthographicCamera
        makeDefault
        zoom={1}
        top={200}
        bottom={-200}
        left={200}
        right={-200}
        near={1}
        far={2000}
        position={[0, 0, 200]}
      />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
