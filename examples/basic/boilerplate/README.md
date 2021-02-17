# A minimal r3f boilerplate

A minimal example of an r3f scene. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/basic/boilerplate)

## Code

```js
    import React from "react";
    import { render } from "react-dom";
    import { Canvas } from "react-three-fiber";
    import "./styles.css";

    const Box = () => {
    return (
        <mesh rotation-x={Math.PI * 0.25} rotation-y={Math.PI * 0.25}>
        <boxBufferGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color={"red"} />
        </mesh>
    );
    };

    const App = () => {
    return (
        <Canvas style={{ height: 400, width: 400 }}>
        <pointLight position={[5, 5, 5]} />
        <Box />
        </Canvas>
    );
    };

    render(<App />, document.getElementById("root"));
```

## Screenshot

![Boilerplate](boilerplate.png "Boilerplate")
