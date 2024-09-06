const fs = require("fs");
const path = require("path");

const projectName = "graph-it";
const exportPath = path.join(__dirname, projectName);
const baseURL = `https://rodolphostraub.github.io/${projectName}/`;

function fixPaths(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      fixPaths(filePath);
    } else if (stats.isFile() && file.endsWith(".html")) {
      let content = fs.readFileSync(filePath, "utf8");
      content = content.replace(/src="\/([^"]+)"/g, `src="${baseURL}$1"`);
      content = content.replace(/href="\/([^"]+)"/g, `href="${baseURL}$1"`);
      fs.writeFileSync(filePath, content, "utf8");
    }
  });
}

fixPaths(exportPath);
console.log('done')
