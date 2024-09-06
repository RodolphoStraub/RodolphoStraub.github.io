const fs = require("fs");
const path = require("path");

const projectName = "dragonball";
const exportPath = path.join(__dirname, projectName);
const baseURL = `https://rodolphostraub.github.io/${projectName}`;

// Função para corrigir os caminhos
function fixPaths(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    // Verifique se o arquivo é um diretório ou arquivo HTML
    if (stats.isDirectory()) {
      fixPaths(filePath); // Recursão para entrar em subpastas
    } else if (
      stats.isFile() &&
      (file.endsWith(".html") || file.endsWith(".txt") || file.endsWith(".js"))
    ) {
      let content = fs.readFileSync(filePath, "utf8");
 
      // Adicione a base URL aos caminhos normais (exceto aqueles que começam com "/_next" e já contêm "dragonball")
      content = content.replace(
        /src="\/(?!_next)(?!dragonball)([^"]*)"/g,
        `src="${baseURL}/$1"`
      );

      // Adicione a base URL para caminhos dentro de scripts (com \")
      content = content.replace(
        /\\"src\\":\\"\/(?!_next)(?!dragonball)([^\\"]*)\\"/g,
        `\\"src\\":\\"${baseURL}/$1\\"`
      );
      content = content.replace(
        /\\"href\\":\\"\/(?!_next)(?!dragonball)([^\\"]*)\\"/g,
        `\\"href\\":\\"${baseURL}/$1\\"`
      );

      content = content.replace(
        new RegExp(`/${projectName}/_next/`, "g"),
        `${baseURL}/_next/`
      );

      content = content.replace(/src":"\/([^"]*)"/g, `src":"${baseURL}/$1"`);

      content = content.replace(/src="\/([^"]*)"/g, `src="${baseURL}/$1"`);

      // Substituir URLs no formato src="./alguma-coisa" (caminhos relativos com ./)
      content = content.replace(/src="\.\.\/([^"]*)"/g, `src="${baseURL}/$1"`);

      content = content.replace(
        /src=["']\/([^"']+)["']/g,
        `src="${baseURL}/$1"`
      );

      content = content.replace(/src:"\/([a-zA-Z0-9\-_.\/]+)"/g, `src:"${baseURL}/$1"`);

      fs.writeFileSync(filePath, content, "utf8");
    }
  });
}

// Chamar a função fixPaths para corrigir os caminhos
fixPaths(exportPath);
// console.log("Caminhos corrigidos com sucesso!");
