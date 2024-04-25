const http = require("http");
// 서버, 클라이언트 간에 어떻게 데이터를 주고 받을 것인가

const server = http.createServer();

server.on("request", (request, response) => {
  console.log(request.url);
  if (request.url === "/") {
    response.end("hello javascript");
  }
});

server.listen(3000, () => {
  console.log("listen 3000");
});
