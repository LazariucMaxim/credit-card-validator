const fs = require('fs');
const path = require('path');

module.exports = function () {
  const imagesDir = path.resolve(__dirname, '../src/images');

  const files = fs.readdirSync(imagesDir).filter(f =>
    /\.(png|jpe?g|gif|webp|svg)$/i.test(f)
  );

  let css = '';
  files.forEach(file => {
    const className = path.basename(file, path.extname(file))
    css += `\n.${className} {\nbackground-image: url(../images/${file});\n}\n`;
  });

  return css;
};