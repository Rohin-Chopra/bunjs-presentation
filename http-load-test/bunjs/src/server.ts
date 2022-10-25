import db from "./db";

const getHome = (req: Request) => {
  return new Response("<h1>Hello from Bunjs</h1>", {
    status: 200,
    headers: {
      "Content-Type": "text/html",
    },
  });
};

const getUsers = (req: Request) => {
  const preparedStatement = db.prepare("SELECT * FROM users");
  const users = preparedStatement.all();

  return new Response(JSON.stringify(users), { status: 200 });
};

const app = (req: Request) => {
  switch (new URL(req.url).pathname) {
    case "/users":
      return getUsers(req);
    default:
      return getHome(req);
  }
};

const port = +process.env.PORT || 80;

const server = Bun.serve({
  fetch: app,
  port,
});

console.log(`Bunjs server listening on http:localhost:${server.port}`);
