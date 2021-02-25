![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/materials/glowing-torus/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/materials/glowing-torus/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/materials/glowing-torus/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# Glowing torus

A shader material glow effect. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/materials/glowing-torus)

## Live example
<div align="center">
  <br>
Coming Soon
  <br>
</div>

## Code
```js
import * as THREE from "three";
import React, { useRef } from "react";
import ReactDOM from "react-dom";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import "./styles.css";

const GlowShaderMaterial = {
  uniforms: {
    viewVector: { type: "v3", value: new THREE.Vector3(0, 0, 0) }
  },
  vertexShader: `
  uniform vec3 viewVector;
  varying float intensity;
  void main() {
      gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
      vec3 actual_normal = vec3(modelMatrix * vec4(normal, 0.0));
      intensity = pow( dot(normalize(viewVector), actual_normal), 8.0 );
  }
  `,
  fragmentShader: `
    varying float intensity;
    void main() {
      vec3 glow = vec3(0, 1, 0) * intensity;
      gl_FragColor = vec4( glow, 1.0 );
    }
  `
};
const Torus = () => {
  const torusRef = useRef();
  const glowRef = useRef();

  useFrame(({ camera }) => {
    torusRef.current.rotation.x += 0.01;
    torusRef.current.rotation.y += 0.01;
    const camVec = camera.position;
    const glowVec = new THREE.Vector3();
    glowRef.current.getWorldPosition(glowVec);
    const viewVector = new THREE.Vector3().subVectors(camVec, glowVec);
    glowRef.current.material.uniforms.viewVector.value = viewVector;
  });

  return (
    <group ref={torusRef}>
      <mesh>
        <torusGeometry args={[10, 3, 32, 256]} />
        <meshPhongMaterial attach="material" color={"green"} />
      </mesh>
      <mesh ref={glowRef}>
        <torusGeometry args={[10, 6, 32, 256]} />
        <shaderMaterial
          attach="material"
          args={[GlowShaderMaterial]}
          side={THREE.FrontSide}
          blending={THREE.AdditiveBlending}
          transparent={true}
        />
      </mesh>
    </group>
  );
};

const App = () => {
  return (
    <Canvas
      style={{ height: 600, width: 600 }}
      camera={{ position: [-20, 20, 20] }}
    >
      <color attach={"background"} args={"black"} />
      <pointLight position={[-5, 5, 5]} />
      <Torus />
      <OrbitControls />
      <Stats />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

```bash
$ cd examples/materials/glowing-torus
$ npm install && npm run start
```