import fs from "fs";
import path from "path";

let componentName = process.argv[2];
if (!componentName) {
    console.error("❌ no component specified! E.g MyFavoriteComponent");
    process.exit(1);
}
componentName = componentName
    .split(/-|\s|_/g)
    .map((name) => (name[0].toUpperCase() + name.slice(1)).replace(/[^\w]*/g, ""))
    .join("");
const cwd = process.cwd();

const reactFileContent = `import React from "react";
import PropTypes from "prop-types";

function ${componentName}({children, ...props}) {
    return (
      <div {...props}>{children}</div>
    );
}

${componentName}.propTypes = {
    ...${componentName}.propTypes,
}
  
export default ${componentName};
`;
const vueFileContent = `<template>
    <div v-bind="props">
      <slot/>
    </div>
</template>

<script>
export default {
  name: "${componentName}",
  data() {
    const {...props} = this.$props;
    return {
      props
    };
  }
};
</script>
`;
const react_d_tsFileContent = `import {ReactElement} from "react";
declare interface ${componentName}Props{

}

declare function ${componentName}(props: ${componentName}Props): ReactElement;

export default ${componentName};
`;

const reactLocalFileContent = `import React from "react";
import ${componentName} from "../../../components/${componentName}/${componentName}";

function _${componentName}(){
  return (
    <div>
      <${componentName}></${componentName}>
    </div>
  );
}

export default _${componentName};
`;

const vueLocalFileContent = `<template>
  <div>
    <${componentName}></${componentName}>
  </div>
</template>

<script>
  import ${componentName} from "../../../components/${componentName}/${componentName}";

  export default {
    name: "_${componentName}",
    components: {
      ${componentName},
    }
  };
</script>
  `;

const pathsToCreate = [
    // react component,local folders
    path.join(cwd, "src", "react", "components", componentName),
    path.join(cwd, "src", "react", "local", "src", "internals"),
    path.join(cwd, "src", "vue", "components", componentName),
    path.join(cwd, "src", "vue", "local", "src", "internals"),
];

console.log("⏳ Creating following directories\n\t\t", pathsToCreate.join("\n\t\t "));
for (const folderPath of pathsToCreate) {
    // invoking unix `mkdir` cmd
    fs.mkdirSync(folderPath, { recursive: true });

    if (folderPath.endsWith(componentName)) {
        const filePaths = [];
        if (folderPath.includes("/react/")) {
            filePaths.push(
                {
                    path: path.join(folderPath, `${componentName}.jsx`),
                    content: reactFileContent,
                },
                {
                    path: path.join(folderPath, `${componentName}.d.ts`),
                    content: react_d_tsFileContent,
                },
            );
        }
        if (folderPath.includes("/vue/")) {
            filePaths.push({
                path: path.join(folderPath, `${componentName}.vue`),
                content: vueFileContent,
            });
        }

        for (const filePath of filePaths) {
            if (fs.existsSync(filePath.path)) {
                console.error(`The file ${filePath.path} already exists, Skipping...`);
                continue;
            }
            fs.appendFileSync(filePath.path, filePath.content);
        }
    } else {
        const filePaths = [];
        if (folderPath.includes("/react/")) {
            filePaths.push({
                path: path.join(folderPath, `_${componentName}.jsx`),
                content: reactLocalFileContent,
            });
        }
        if (folderPath.includes("/vue/")) {
            filePaths.push({
                path: path.join(folderPath, `_${componentName}.vue`),
                content: vueLocalFileContent,
            });
        }
        for (const filePath of filePaths) {
            if (fs.existsSync(filePath.path)) {
                console.error(`The file ${filePath.path} already exists, Skipping...`);
                continue;
            }
            fs.appendFileSync(filePath.path, filePath.content);
        }
    }
}

console.log("✔ Finished creating");
