const fs = require("fs");
const path = require("path");

// Defina o caminho para a pasta de exportação (modifique conforme necessário)
const exportPath = path.join(__dirname, "graph-it"); // 'dist' é onde seus arquivos exportados estão

// Função para corrigir os caminhos
function fixPaths(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    // Verifique se o arquivo é um diretório ou arquivo HTML
    if (stats.isDirectory()) {
      fixPaths(filePath); // Recursão para entrar em subpastas
    } else if (stats.isFile() && file.endsWith(".html")) {
      let content = fs.readFileSync(filePath, "utf8");

      if (!content.includes("/_next")) {
        // Substitua src="/alguma-coisa" por src="./alguma-coisa"
        content = content.replace(/src="\/([^"]+)"/g, 'src="./$1"');
        // Substitua href="/alguma-coisa" por href="./alguma-coisa"
        content = content.replace(/href="\/([^"]+)"/g, 'href="./$1"');
        // Salve o arquivo com os caminhos corrigidos
        fs.writeFileSync(filePath, content, "utf8");
      }
    }
  });
}

// Chamar a função fixPaths para corrigir os caminhos
fixPaths(exportPath);
console.log('louvado seja o gpt')