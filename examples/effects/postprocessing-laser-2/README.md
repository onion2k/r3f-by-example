![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-laser-2/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-laser-2/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-laser-2/package.json&label=@react-three/postprocessing&query=$.dependencies['@react-three/postprocessing']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-laser-2/package.json&label=postprocessing&query=$.dependencies['postprocessing']&color=green)

# Godrays 2

Another example of godrays. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/effects/postprocessing-laser-2)

## Live example
<div align="center">
  <br>
Coming Soon
  <br>
</div>

## Code
```js
import * as THREE from "three";
import { BufferGeometryUtils } from "three/examples/jsm/utils/BufferGeometryUtils";
import React, { forwardRef, useRef } from "react";
import { render } from "react-dom";
import { Canvas, useFrame, useResource } from "react-three-fiber";
import { EffectComposer, GodRays } from "@react-three/postprocessing";
import { BlendFunction, Resizer, KernelSize } from "postprocessing";
import "./styles.css";

function Knot() {
  const knotRef = useRef();

  useFrame(() => {
    knotRef.current.rotation.y += -0.01;
    knotRef.current.rotation.z += -0.01;
  });

  return (
    <mesh ref={knotRef}>
      <torusKnotGeometry args={[4, 0.9, 256, 64]} />
      <meshPhysicalMaterial
        color={"#FFFF00"}
        roughness={0.1}
        metalness={0.4}
        clearcoat={0.8}
      />
    </mesh>
  );
}

const Sun = forwardRef(function Sun(props, forwardRef) {
  useFrame(() => {
    forwardRef.current.rotation.z -= 0.01;
  });

  let blob = new THREE.SphereBufferGeometry(1, 4, 4);

  for (let x = 0; x < 20; x++) {
    const sphereGeometry = new THREE.SphereBufferGeometry(1, 4, 4);

    sphereGeometry.applyMatrix4(
      new THREE.Matrix4().makeTranslation(
        Math.sin(((Math.PI * 2) / 20) * x) * 10,
        Math.cos(((Math.PI * 2) / 20) * x) * 10,
        0
      )
    );

    blob = BufferGeometryUtils.mergeBufferGeometries([blob, sphereGeometry]);
  }

  return (
    <mesh
      ref={forwardRef}
      position={[0, 0, -15]}
      geometry={blob}
      material={new THREE.MeshBasicMaterial({ color: 0x00ffff })}
    />
  );
});

function Effects() {
  const sunRef = useResource();
  return (
    <>
      <Sun ref={sunRef} />
      {sunRef.current && (
        <EffectComposer multisampling={0}>
          <GodRays
            sun={sunRef.current}
            blendFunction={BlendFunction.Additive}
            samples={50}
            density={0.97}
            decay={0.97}
            weight={0.5}
            exposure={0.75}
            clampMax={1}
            width={Resizer.AUTO_SIZE}
            height={Resizer.AUTO_SIZE}
            kernelSize={KernelSize.SMALL}
            blur={true}
          />
        </EffectComposer>
      )}
    </>
  );
}

render(
  <Canvas
    style={{ height: 600, width: 600 }}
    camera={{ position: [0, 0, 10] }}
    onCreated={({ gl }) => {
      gl.setClearColor(new THREE.Color("#000000"));
    }}
  >
    <pointLight position={[15, 15, 15]} intensity={0.25} />
    <Knot />
    <Effects />
  </Canvas>,
  document.querySelector("#root")
);

```

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

```bash
$ cd examples/effects/postprocessing-laser-2
$ npm install && npm run start
```