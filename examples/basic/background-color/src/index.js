import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import "./styles.css";

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <color attach="background" args={"black"} />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
