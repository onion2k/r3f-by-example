import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import "./styles.css";

const Sphere = () => {
  const sphereRef = useRef();
  const repeatX = 4;
  const repeatY = 2;

  const base = useLoader(THREE.TextureLoader, "/metal/metal1_basecolor.jpg");
  base.wrapS = THREE.RepeatWrapping;
  base.wrapT = THREE.RepeatWrapping;
  base.repeat.set(repeatX, repeatY);

  const bump = useLoader(THREE.TextureLoader, "/metal/metal1_height.png");
  bump.wrapS = THREE.RepeatWrapping;
  bump.wrapT = THREE.RepeatWrapping;
  bump.repeat.set(repeatX, repeatY);

  const normal = useLoader(THREE.TextureLoader, "/metal/metal1_normal.jpg");
  normal.wrapS = THREE.RepeatWrapping;
  normal.wrapT = THREE.RepeatWrapping;
  normal.repeat.set(repeatX, repeatY);

  const ao = useLoader(
    THREE.TextureLoader,
    "/metal/metal1_ambientOcclusion.jpg"
  );
  ao.wrapS = THREE.RepeatWrapping;
  ao.wrapT = THREE.RepeatWrapping;
  ao.repeat.set(repeatX, repeatY);

  const metalness = useLoader(
    THREE.TextureLoader,
    "/metal/metal1_metallic.jpg"
  );
  metalness.wrapS = THREE.RepeatWrapping;
  metalness.wrapT = THREE.RepeatWrapping;
  metalness.repeat.set(repeatX, repeatY);

  const rough = useLoader(THREE.TextureLoader, "/metal/metal1_roughness.jpg");
  rough.wrapS = THREE.RepeatWrapping;
  rough.wrapT = THREE.RepeatWrapping;
  rough.repeat.set(repeatX, repeatY);

  useFrame(() => {
    sphereRef.current.rotation.x += 0.01;
    sphereRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[3, 36, 36]} />
      <meshPhysicalMaterial
        map={base}
        metalnessMap={metalness}
        bumpMap={bump}
        aoMap={ao}
        normalMap={normal}
        roughnessMap={rough}
      />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <pointLight position={[5, 10, -10]} intensity={1} />
      <pointLight position={[0, 0, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Sphere />
      </Suspense>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
