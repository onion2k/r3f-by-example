import * as THREE from "three";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import "./styles.css";

const KnotShaderMaterial = {
  uniforms: {
    viewVector: { type: "v3", value: new THREE.Vector3(0, 0, 0) },
    u_time: { type: "f", value: 0 }
  },
  vertexShader: `
    precision mediump float;
    varying vec2 vUv;
    uniform vec3 viewVector;
    varying float reflection;
    void main() {
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
        vec3 actual_normal = vec3(modelMatrix * vec4(normal, 0.0));
        reflection = pow( dot(normalize(viewVector), actual_normal), 6.0 );
        vUv = uv;
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform float u_time;
    varying float reflection;
    void main() {
      vec2 uv = vUv;
      float cb = floor((uv.x + u_time) * 40.);
      gl_FragColor = vec4(mod(cb, 2.0) * reflection, reflection, reflection,1.);
    }
  `
};

const Torus = (props) => {
  const torusRef = useRef();

  useFrame(({ camera, clock }) => {
    torusRef.current.material.uniforms.u_time.value = clock.oldTime * 0.0001;

    const camVec = camera.position;
    const glowVec = new THREE.Vector3();
    torusRef.current.getWorldPosition(glowVec);
    const viewVector = new THREE.Vector3().subVectors(camVec, glowVec);
    torusRef.current.material.uniforms.viewVector.value = viewVector;
  });

  return (
    <mesh ref={torusRef} {...props}>
      <torusGeometry args={[1.8, 1.2, 48, 64]} />
      <shaderMaterial attach="material" args={[KnotShaderMaterial]} />
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
