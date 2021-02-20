import React, { useRef, Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, useMatcapTexture, Stats } from "@react-three/drei";
import "./styles.css";

const Ring = () => {
  const ringRef = useRef();
  const [matcapTexture] = useMatcapTexture("C9C7BE_55514B_888279_7B6E5F", 1024);

  useFrame(() => {
    ringRef.current.rotation.x += 0.01;
    ringRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[2, 0.6, 36, 72]} />
      <meshMatcapMaterial matcap={matcapTexture} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 600, width: 600 }}>
      <pointLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Ring />
      </Suspense>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
