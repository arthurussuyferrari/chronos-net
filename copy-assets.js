const fs = require("fs");
const path = require("path");

const srcPopup = path.resolve("src/popup");
const distPopup = path.resolve("dist/popup");

// cria dist/popup se não existir
fs.mkdirSync(distPopup, { recursive: true });

// copia html e css
for (const file of fs.readdirSync(srcPopup)) {
  if (file.endsWith(".html") || file.endsWith(".css")) {
    fs.copyFileSync(
      path.join(srcPopup, file),
      path.join(distPopup, file)
    );
  }
}

console.log("popup.html e popup.css copiados com sucesso.");
