const fs = require("fs");

//STEP1: Create file dynamicaly
try {
  fs.writeFileSync("./notes.txt", "The world has enough coders");
} catch (err) {
  console.log("error happened while writing a file", err);
}
//STEP2: Retrive 1
try {
  const buffer = fs.readFileSync("./notes.txt", { encoding: "utf8" });
  console.log(buffer);
} catch (err) {
  console.log("error happened while writing a file", err);
}
//STEP3: Append the text
try {
  fs.appendFileSync("./notes.txt", " BE A CODING NINJA!");
} catch (err) {
  console.log("error happened while appending a file", err);
}
//STEP4: Retrive 2
try {
  const buffer = fs.readFileSync("./notes.txt", { encoding: "utf8" });
  console.log(buffer);
} catch (err) {
  console.log("error happened while writing a file", err);
}
