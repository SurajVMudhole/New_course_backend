const express = require("express");
const server = express();
const port = 8080;

server.get("/", (req, res) => {
  return res.send("Hello this is ");
});
server.use(express.static("./public"));
server.listen(port, () => {
  console.log(`listening on port:${port}`);
});
