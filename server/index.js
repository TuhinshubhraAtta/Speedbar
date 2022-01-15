const express = require("express");
const httpProxy = require("http-proxy");
const cors = require("cors");
const app = express();
const apiProxy = httpProxy.createProxyServer();
const backend = "http://85.25.93.139:3000/stats",
  frontend = "http://localhost:3000";

app.use(
  cors({
    origin: frontend,
  })
);

app.all("/", function (req, res) {
  apiProxy.web(req, res, { target: backend });
});

app.all("/", function (req, res) {
  apiProxy.web(req, res, { target: frontend });
});

const server = require("http").createServer(app);
server.on("upgrade", function (req, socket, head) {
  apiProxy.ws(req, socket, head, { target: frontend });
});
server.listen(4000);
