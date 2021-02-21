import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Physics, useSphere, useDistanceConstraint } from "@react-three/cannon";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import Ball from "./ball";
import Ground from "./ground";
import "./styles.css";

function Chain() {
  const [link1] = useSphere(() => ({
    mass: 0,
    position: [0, 6, 0]
  }));

  const [link2, api2] = useSphere(() => ({
    mass: 1,
    position: [0, 4, 0]
  }));

  const [link3, api3] = useSphere(() => ({
    mass: 1,
    position: [0, 2, 0]
  }));

  useDistanceConstraint(link1, link2, {
    distance: 2
  });

  useDistanceConstraint(link2, link3, {
    distance: 2
  });

  return (
    <group>
      <group ref={link1}>
        <Ball color={"red"} />
      </group>
      <group
        ref={link2}
        onClick={() => {
          api2.applyImpulse([3, 3, 3], [0, 0, 0]);
        }}
      >
        <Ball color={"yellow"} />
      </group>
      <group
        ref={link3}
        onClick={() => {
          api3.applyImpulse([3, 3, 3], [0, 0, 0]);
        }}
      >
        <Ball color={"green"} />
      </group>
    </group>
  );
}

const App = () => {
  return (
    <Canvas
      style={{ height: 600, width: 600 }}
      camera={{ position: [0, 5, 10] }}
    >
      <pointLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Physics>
          <Chain />
          <Ground />
        </Physics>
      </Suspense>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
