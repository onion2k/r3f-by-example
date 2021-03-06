import React, { Suspense } from "react";
import { Physics, useBox } from "@react-three/cannon";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import Ball from "./ball";
import Ground from "./ground";
import "./styles.css";

function Cube(props) {
  const [ref] = useBox(() => ({
    mass: 0,
    ...props
  }));
  return (
    <mesh ref={ref} rotation={props.rotation} castShadow receiveShadow>
      <boxBufferGeometry attach="geometry" args={props.args} />
      <meshStandardMaterial color={"yellow"} />
    </mesh>
  );
}

const App = () => {
  return (
    <Canvas
      shadowMap
      style={{ height: 600, width: 600 }}
      camera={{ position: [0, 50, 30] }}
    >
      <directionalLight
        castShadow
        position={[0, 15, 15]}
        shadow-mapSize-height={1024}
        shadow-mapSize-width={1024}
        shadow-radius={5}
        shadow-bias={-0.0002}
        shadow-camera-near={1}
        shadow-camera-far={500}
        shadow-camera-top={20}
        shadow-camera-left={20}
        shadow-camera-right={-20}
        shadow-camera-bottom={-20}
      />
      <Suspense fallback={null}>
        <Physics>
          <Ball position={[10, 28, 0]} color={"red"} />
          <Ball position={[7, 29, 0]} color={"green"} />
          <Ball position={[4, 30, 0]} color={"blue"} />
          <Cube args={[25, 1, 1]} position={[8, 5, 0]} rotation={[0, 0, 0.2]} />
          <Cube
            args={[25, 1, 1]}
            position={[-8, 15, 0]}
            rotation={[0, 0, -0.2]}
          />
          <Cube
            args={[25, 1, 1]}
            position={[8, 25, 0]}
            rotation={[0, 0, 0.2]}
          />
          <Ground />
        </Physics>
      </Suspense>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
