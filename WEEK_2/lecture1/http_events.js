const http = require("http");
const port = 8000;
const server = http.createServer((req, res) => {
  if (req.method == "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      console.log(body);
      res.end("Data Recieved");
    });
  } else {
    res.end("Hello, world!");
  }
});
server.listen(port);
console.log(`Server Running on port ${port}`);
