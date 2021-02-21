import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";

const SphereShaderMaterial = {
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
      float cb = floor((uv.x + u_time)*20.) + floor((uv.y + u_time)*20.);
      gl_FragColor = vec4(1.,0.,0.,mod(cb, 2.0));
    }
  `
};

const ShaderSphere = (props) => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    sphereRef.current.material.uniforms.u_time.value = clock.oldTime * 0.00005;
  });

  return (
    <mesh ref={sphereRef} {...props}>
      <sphereGeometry args={[2, 24, 24]} />
      <shaderMaterial attach="material" args={[SphereShaderMaterial]} />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 800 }}>
      <pointLight position={[5, 5, 5]} />
      <ShaderSphere />
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
