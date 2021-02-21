![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-eskil-vignette/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-eskil-vignette/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-eskil-vignette/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/effects/postprocessing-eskil-vignette/package.json&label=@react-three/postprocessing&query=$.dependencies['@react-three/postprocessing']&color=green)

# effects/postprocessing-eskil-vignette

Description coming soon. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/effects/postprocessing-eskil-vignette)

## Screenshot
<div align="center">
  <br>
    Coming Soon
  <br>
</div>

## Code
```js
import React from "react";
import ReactDOM from "react-dom";
import { Canvas } from "react-three-fiber";
import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { OrbitControls, Stats } from "@react-three/drei";
import "./styles.css";

import { SmallBox, Wall, Box, Ball, Ground } from "./scene";

function Effects() {
  return (
    <EffectComposer>
      <Vignette
        offset={1.5}
        darkness={0.9}
        // Eskil's vignette technique works from the outside inwards rather
        // than the inside outwards, so if this is 'true' set the offset
        // to a value greater than 1.
        // See frag for details - https://github.com/vanruesc/postprocessing/blob/main/src/effects/glsl/vignette/shader.frag
        eskil={true}
        blendFunction={BlendFunction.NORMAL}
      />
    </EffectComposer>
  );
}

const App = () => {
  return (
    <Canvas
      style={{ height: 400, width: 400 }}
      camera={{ position: [10, 10, 10] }}
    >
      <directionalLight position={[2.5, 5, 5]} />
      <SmallBox />
      <Box />
      <Ball />
      <Wall />
      <Ground />
      <Effects />
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
$ cd examples/effects/postprocessing-eskil-vignette
$ npm install && npm run start
```