import * as THREE from "three";
import React, { useRef, useMemo, useEffect, Suspense } from "react";
import { render } from "react-dom";
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
  useResource
} from "react-three-fiber";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import "./styles.css";

extend({ EffectComposer, RenderPass, UnrealBloomPass });

function Sphere() {
  const sphereRef = useRef();
  const matRef = useRef();
  const repeatX = 10;
  const repeatY = 10;

  const base = useLoader(THREE.TextureLoader, "/emissive.png");
  base.wrapS = THREE.RepeatWrapping;
  base.wrapT = THREE.RepeatWrapping;
  base.repeat.set(repeatX, repeatY);

  useFrame(({ clock }) => {
    sphereRef.current.rotation.y += -0.01;
    matRef.current.emissiveIntensity = Math.abs(
      Math.sin(clock.elapsedTime * 0.5)
    );
  });

  return (
    <mesh ref={sphereRef}>
      <sphereGeometry args={[5, 36, 36]} />
      <meshPhysicalMaterial
        ref={matRef}
        color={"gold"}
        roughness={0.5}
        metalness={0.2}
        emissiveMap={base}
        emissive={"white"}
        emissiveIntensity={1}
      />
    </mesh>
  );
}

function Bloom({ children }) {
  const { gl, camera, size } = useThree();
  const ref = useResource();
  const composer = useRef();
  const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [
    size
  ]);
  useEffect(
    () => void ref.current && composer.current.setSize(size.width, size.height),
    [ref, size]
  );
  useFrame(() => ref.current && composer.current.render(), 1);
  return (
    <>
      <scene ref={ref}>{children}</scene>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={ref.current} camera={camera} />
        <unrealBloomPass attachArray="passes" args={[aspect, 3, 0.8, 0]} />
      </effectComposer>
    </>
  );
}

render(
  <Canvas style={{ height: 600, width: 600 }} camera={{ position: [0, 0, 10] }}>
    <Bloom>
      <pointLight position={[15, 15, 15]} intensity={0.1} />
      <Suspense fallback={null}>
        <Sphere />
      </Suspense>
    </Bloom>
  </Canvas>,
  document.querySelector("#root")
);
