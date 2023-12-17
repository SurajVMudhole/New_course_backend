const express = require("express");
const server = express();
const port = 8000;

//global middleware
function globalmiddleware(req, res, next) {
  console.log("This is a global middleware");
  next();
}

function firstmiddleware(req, res, next) {
  console.log("1 Middleware was hit");
  next();
}
function secondmiddleware(req, res, next) {
  console.log("2 Middleware was hit");
  next();
}

server.use(globalmiddleware);
server.get("/", [firstmiddleware, secondmiddleware], (req, res) => {
  res.send("welcome to the express server !!");
});
server.get("/send", (req, res) => {
  res.send("welcome to send");
});
//listen on port 8000
server.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
