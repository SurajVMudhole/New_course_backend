const fs = require("fs");
fs.writeFileSync("file_name","file_content",callback_Function(err)={});
fs.writeFile("./src/sonu.txt", "Fuck u!", (err) => {
  if (err) {
    console.log("Error writing into file: " + err);
  } else {
    console.log("good to go!");
  }
});
console.log("2n line");

fs.readFile("src/sonu.txt", (err, data) => {
  if (err) {
    console.log("Error writing into file: " + err);
  } else {
    console.log(data.toString());
  }
});
