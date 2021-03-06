const { resolve } = require('path');
const { readFileSync, writeFileSync, linkSync } = require('fs');
const { readdir } = require('fs').promises;

// Loop through examples directory

function s(l) { return l.charAt(0).toUpperCase() + l.slice(1).replace(/-/g, ' ') }

function e(l) {
    return s(l.substring(l.indexOf('/')+1))
}

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

const categories = {}
const links = []

examples.then((directories)=>{

    directories.forEach((dir)=>{

        if (!dir) return

        const directoryPath = dir.replace("/Users/chrisneale/projects/r3f-by-example/examples/", "");
        const category = directoryPath.substring(0, directoryPath.indexOf('/'))

        if (categories[category]===undefined) { categories[category] = [] }

        categories[category].push( `${directoryPath}` )

    })

    Object.keys(categories).forEach((category)=>{

        links.push("\n## "+s(category)+"\n\n")

        categories[category].forEach((link)=>{
          const packageJson = JSON.parse(readFileSync("./examples/"+link+'/package.json'));
          links.push("- ["+e(link)+"](https://onion2k.github.io/r3f-by-example/examples/"+link+")\n\n  "+packageJson.description+"\n")
        })

    })

  const tocTemplate = `<div align="right"><a class="github-button" href="https://github.com/onion2k/r3f-by-example" data-size="large" data-show-count="true" aria-label="Star onion2k/r3f-by-example on GitHub">Star</a></div>

# react-three-fiber by example

Examples of using react-three-fiber.

## Table of Contents
${ Object.keys(categories).map((l)=>`- [${s(l)}](#${l})\n`).join('') }

${ links.map((l)=>l).join('') }

<script async defer src="https://buttons.github.io/buttons.js"></script>
  `
  writeFileSync('INDEX.md', tocTemplate);


//     console.log(index, dir)

//     const directoryPath = dir.replace("/Users/chrisneale/projects/r3f-by-example/examples/", "");

//     const packageJson = JSON.parse(readFileSync(dir+'/package.json'));

//     const dependencies = ['react-three-fiber', 'three'];
//     if (packageJson.dependencies['@react-three/drei']) dependencies.push('@react-three/drei')
//     if (packageJson.dependencies['@react-three/postprocessing']) dependencies.push('@react-three/postprocessing')
//     if (packageJson.dependencies['postprocessing']) dependencies.push('postprocessing')
//     const description = packageJson.description;
//     const title = packageJson.name.charAt(0).toUpperCase() + packageJson.name.slice(1).replace(/-/g, ' ');
//     const code = readFileSync(dir+'/src/index.js');

  })

//   const readmeTemplate = `# react-three-fiber by example


//   `
  
//   writeFileSync('README.md', readmeTemplate);
  