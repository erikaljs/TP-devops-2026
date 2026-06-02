import * as http from "http";

const PORT = process.env.PING_LISTEN_PORT
  ? parseInt(process.env.PING_LISTEN_PORT)
  : 3000;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/ping") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(req.headers));
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});