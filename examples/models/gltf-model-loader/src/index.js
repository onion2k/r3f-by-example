import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";

import Plane from "./model";

const App = () => (
  <Canvas style={{ height: 400, width: 800 }}>
    <pointLight position={[5, 5, 5]} />
    <Suspense fallback={null}>
      <Plane rotation={[0, Math.PI * 1.25, 0]} />
    </Suspense>
    <OrbitControls />
    <Stats />
  </Canvas>
);

ReactDOM.render(<App />, document.getElementById("root"));
