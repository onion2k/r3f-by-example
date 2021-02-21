import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import "./styles.css";

const Cube = () => {
  const cubeRef = useRef();
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const intersections = useRef([]);

  const pointerIn = (event) => {
    intersections.current.push(event.intersections[0].point);
    setStart(event.intersections[0].point);
  };

  const pointerMove = (event) => {
    setEnd(event.intersections[0].point);
  };

  const pointerOut = () => {
    const angle =
      (Math.atan2(start.y - end.y, start.x - end.x) * 180) / Math.PI + 180;
    console.log(angle);
    intersections.current.push(end);
    setStart(null);
    setEnd(null);
  };

  return (
    <>
      <mesh
        ref={cubeRef}
        onPointerEnter={pointerIn}
        onPointerMove={pointerMove}
        onPointerLeave={pointerOut}
      >
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
      {intersections.current.map((p, index) => (
        <mesh key={`i-${index}`} position={p}>
          <sphereGeometry args={[0.1, 24, 24]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
      ))}
    </>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 600, width: 600 }}>
      <pointLight position={[5, 5, 5]} />
      <Cube />
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
