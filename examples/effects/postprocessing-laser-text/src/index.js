import * as THREE from "three";
import React, { forwardRef } from "react";
import { render } from "react-dom";
import { Canvas, useFrame, useResource } from "react-three-fiber";
import { EffectComposer, GodRays } from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing";
import { Text } from "@react-three/drei/Text";
import "./styles.css";

const Sun = forwardRef(function Sun(props, forwardRef) {
  useFrame(({ clock }) => {
    forwardRef.current.position.x =
      Math.sin(clock.getElapsedTime() * 0.3) * -15;
  });

  return (
    <mesh ref={forwardRef} position={[0, 0, -15]}>
      <sphereGeometry args={[1, 36, 36]} />
      <meshBasicMaterial color={"#FF0000"} />
    </mesh>
  );
});

function Effects() {
  const sunRef = useResource();
  return (
    <>
      <Sun ref={sunRef} />
      {sunRef.current && (
        <EffectComposer multisampling={0}>
          <GodRays
            sun={sunRef.current}
            blendFunction={BlendFunction.Screen}
            samples={60}
            density={0.97}
            decay={0.97}
            weight={0.5}
            exposure={0.8}
            clampMax={1}
            width={Resizer.AUTO_SIZE}
            height={Resizer.AUTO_SIZE}
            kernelSize={KernelSize.SMALL}
            blur={true}
          />
        </EffectComposer>
      )}
    </>
  );
}

render(
  <Canvas
    style={{ height: 600, width: 600 }}
    camera={{ position: [0, 0, 10] }}
    onCreated={({ gl }) => {
      gl.setClearColor(new THREE.Color("#000000"));
    }}
  >
    <Text
      font={
        "https://rawcdn.githack.com/google/fonts/3b179b729ac3306ab2a249d848d94ff08b90a0af/apache/robotoslab/static/RobotoSlab-Black.ttf"
      }
      scale={[12, 12, 12]}
      color="#FF0000" // default
      anchorX="center" // default
      anchorY="middle" // default
    >
      LASERS ARE AWESOME
    </Text>
    <Effects />
  </Canvas>,
  document.querySelector("#root")
);
