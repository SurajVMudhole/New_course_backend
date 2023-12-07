const fs = require("fs");
const path = require("path");
// const filepath = path.join("src");
const filepath = path.resolve("src/file.txt");
console.log(filepath);
fs.readFile(path.join(filepath, "notes.txt"), (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});
