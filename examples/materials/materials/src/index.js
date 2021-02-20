import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";

const Sphere = (props) => {
  const sphereRef = useRef();

  return (
    <mesh ref={sphereRef} position={props.position}>
      <sphereGeometry args={[1, 24, 24]} />
      {props.children}
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 800 }}>
      <pointLight position={[5, 5, 5]} />
      <Sphere position={[-4, 0, 0]}>
        <meshBasicMaterial color={"red"} />
      </Sphere>
      <Sphere position={[-2, 0, 0]}>
        <meshLambertMaterial color={"red"} />
      </Sphere>
      <Sphere position={[0, 0, 0]}>
        <meshPhongMaterial color={"red"} />
      </Sphere>
      <Sphere position={[2, 0, 0]}>
        <meshStandardMaterial color={"red"} metalness={0.2} roughness={0.2} />
      </Sphere>
      <Sphere position={[4, 0, 0]}>
        <meshPhysicalMaterial
          color={"red"}
          metalness={0.2}
          roughness={0}
          clearcoat={0.8}
        />
      </Sphere>
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
