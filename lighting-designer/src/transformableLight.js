import React, { useRef, useState, useEffect } from "react";
import { TransformControls, Html } from "@react-three/drei";

import useCameraControllerStore from "./controllerStore";

export default function TransformableLight(props) {
  const [active, setActive] = useState(false);
  const [intensity, setIntensity] = useState(props.intensity);
  const transform = useRef();

  useEffect(() => {
    if (transform.current) {
      const controls = transform.current;
      const callback = (event) =>
        useCameraControllerStore.setState({ enabled: !event.value });
      controls.addEventListener("dragging-changed", callback);
      return () => controls.removeEventListener("dragging-changed", callback);
    }
  });

  return (
    <TransformControls
      ref={transform}
      position={props.position}
      enabled={true}
      size={0.5}
      showX={active}
      showY={active}
      showZ={active}
    >
      <pointLight
        intensity={intensity}
        castShadow
        shadow-mapSize-height={2048}
        shadow-mapSize-width={2048}
        shadow-radius={10}
        shadow-bias={-0.0001}
      />
      <mesh onClick={() => setActive(!active)}>
        <sphereBufferGeometry args={[0.25, 32]} castShadow />
        <meshStandardMaterial
          color={"#dddddd"}
          metalness={0.25}
          roughness={0.25}
          emissive={"#ffffff"}
          emissiveIntensity={intensity}
        />
      </mesh>
      {active && (
        <Html>
          <input
            type={"range"}
            min={0}
            max={100}
            value={intensity * 100}
            onChange={(e) => setIntensity(e.target.value / 100)}
            style={{
              position: "absolute",
              top: "20px",
              left: "-50px",
              width: "100px"
            }}
          />
        </Html>
      )}
    </TransformControls>
  );
}
