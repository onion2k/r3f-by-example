import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import "./styles.css";

const TorusShaderMaterial = {
  uniforms: {
    u_time: { type: "f", value: 0 }
  },
  vertexShader: `
    precision mediump float;
    varying vec2 vUv;
    void main() {
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.);
        gl_Position = projectionMatrix * mvPosition;
        vUv = uv;
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform float u_time;
    void main() {
      vec2 uv = vUv;
      float cb = floor((uv.x + u_time) * 40.);
      gl_FragColor = vec4(mod(cb, 2.0),0.,0.,1.);
    }
  `
};

const Torus = (props) => {
  const torusRef = useRef();

  useFrame(({ clock }) => {
    torusRef.current.material.uniforms.u_time.value = clock.oldTime * 0.0001;
  });

  return (
    <mesh ref={torusRef} {...props}>
      <torusGeometry args={[1.8, 1.2, 48, 64]} />
      <shaderMaterial attach="material" args={[TorusShaderMaterial]} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 600, width: 600 }}>
      <pointLight position={[5, 5, 5]} />
      <Torus rotation={[-Math.PI * 0.25, Math.PI * 0.75, 0]} />
      <OrbitControls />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
