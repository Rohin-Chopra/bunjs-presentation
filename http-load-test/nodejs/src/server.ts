import http, { IncomingMessage, ServerResponse } from "http";
import db from "./db";

const getHome = (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader("Content-Type", "text/html");
  res.writeHead(200);
  res.end("<h1>Hello from Nodejs</h1>");
};

const getUsers = async (req: IncomingMessage, res: ServerResponse) => {
  const preparedStatement = db.prepare("SELECT * FROM users");
  const users = preparedStatement.all();

  res.setHeader("Content-Type", "application/json");
  res.writeHead(200);
  res.end(JSON.stringify(users));
};

const requestHandler = (req: IncomingMessage, res: ServerResponse) => {
  switch (req.url) {
    case "/users":
      getUsers(req, res);
      break;
    default:
      getHome(req, res);
  }
};

const server = http.createServer(requestHandler);

const port = +process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`Nodejs server listening on http:localhost:${port}`);
});
