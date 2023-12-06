const fs = require("fs");
console.log("First line");

// 1.this is to read data from filesystem
try {
  const buffer = fs.readFileSync("./hello.txt", { encoding: "utf8" });
  console.log(buffer);
} catch (err) {
  console.log("error happened while writing a file", err);
}

//2. this is to create and write data to filesystem
try {
  fs.writeFileSync("./hello1.txt", "Hello world!");
} catch (err) {
  console.log("error happened while writing a file", err);
}

//3. append the file
try {
  fs.appendFileSync("hello1.txt", "Welcome to the world full of js!");
} catch (err) {
  console.log("error happened while appending a file", err);
}

//4. to delete the file =>{ we use the unlinkSync("path") function}
fs.unlinkSync("./hello.txt");

console.log("Second line");
