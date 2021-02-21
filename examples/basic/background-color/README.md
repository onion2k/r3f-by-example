![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/basic/background-color/package.json&label=react-three-fiber&query=$.dependencies['react-three-fiber']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/basic/background-color/package.json&label=three&query=$.dependencies['three']&color=green) ![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/basic/background-color/package.json&label=@react-three/drei&query=$.dependencies['@react-three/drei']&color=green)

# Background color

Using a color element to attach a background color to a scene. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/basic/background-color)

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
import "./styles.css";

const App = () => {
  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <color attach="background" args={"black"} />
    </Canvas>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

```

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

```bash
$ cd examples/basic/background-color
$ npm install && npm run start
```