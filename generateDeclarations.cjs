const fs = require("fs");
const path = require("path");

const inputFilePath = path.join(__dirname, "src/tokens/js/variables.js");
const outputFilePath = path.join(__dirname, "src/tokens/js/variables.d.ts");

fs.readFile(inputFilePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error", err);
    return;
  }

  const regex = /export const (\w+) = /g;
  let match;
  const exports = [];

  while ((match = regex.exec(data)) !== null) {
    exports.push(match[1]);
  }

  const outputData = exports
    .map((variable) => `export const ${variable}: string;`)
    .join("\n");

  fs.writeFile(outputFilePath, outputData, "utf8", (err) => {
    if (err) {
      console.error("Error", err);
      return;
    }
    console.log("TypeScript declarations generated successfully");
  });
});
