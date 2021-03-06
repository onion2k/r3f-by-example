const { resolve } = require('path');
const { readFileSync, writeFileSync } = require('fs');
const { readdir } = require('fs').promises;

// Loop through examples directory

async function getFiles(dir, sub) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    if (dirent.name === '.DS_Store') return null;
    const res = resolve(dir, dirent.name);
    return dirent.isDirectory() && !sub ? getFiles(res, true) : res;
  }));
  return Array.prototype.concat(...files);
}

const examples = getFiles('./examples/', false)

examples.then((directories)=>{

  let index = 0;

  directories.forEach((dir)=>{
    if (!dir) return

    console.log(index, dir)

    const directoryPath = dir.replace("/Users/chrisneale/projects/r3f-by-example/examples/", "");

    const packageJson = JSON.parse(readFileSync(dir+'/package.json'));

    const dependencies = ['react-three-fiber', 'three'];
    if (packageJson.dependencies['@react-three/drei']) dependencies.push('@react-three/drei')
    if (packageJson.dependencies['@react-three/postprocessing']) dependencies.push('@react-three/postprocessing')
    if (packageJson.dependencies['postprocessing']) dependencies.push('postprocessing')
    const description = packageJson.description;
    const title = packageJson.name.charAt(0).toUpperCase() + packageJson.name.slice(1).replace(/-/g, ' ');
    const code = readFileSync(dir+'/src/index.js');

    const embed = packageJson.homepage ? `  <iframe src="${packageJson.homepage.replace('/s/', '/embed/')}?fontsize=14&hidenavigation=1&theme=dark&view=preview"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="Instanced Ducks"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
  ></iframe>` : 'Coming Soon'
     
    const badges = dependencies.map((dependency)=>{
      const dependencyLabelTemplate = `![react-three-fiber](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/onion2k/r3f-by-example/develop/examples/${directoryPath}/package.json&label=${dependency}&query=$.dependencies['${dependency}']&color=green)`
      return dependencyLabelTemplate
    })
    
    const readmeTemplate = `${badges.join(' ')}

# ${title}

${description}. [Fork on Codesandbox](https://githubbox.com/onion2k/r3f-by-example/tree/develop/examples/${directoryPath})

## Live example
<div align="center">
  <br>
${embed}
  <br>
</div>

## Code
\`\`\`js
${code}
\`\`\`

## Running this example

Clone this repo, and then NPM install and NPM start from the relevant directory.

\`\`\`bash
$ cd examples/${directoryPath}
$ npm install && npm run start
\`\`\``

    writeFileSync(dir+'/README.md', readmeTemplate);

    index++;

  })

})
