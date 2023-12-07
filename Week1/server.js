// creating a server using NODEJS.
const http = require("http");
const fs = require("fs");
const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    const data = fs.readFileSync("./index.html").toString();
    return res.end(data);
  }
});

server.listen(port, () => {
  console.log(`Response received at port ${port}`);
});
