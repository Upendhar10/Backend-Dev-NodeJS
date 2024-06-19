// # Building a server in Node environment.

// # importing HTTP server from NodeJs
const http = require("http");

// # localhost
const hostname = "127.0.0.1";
// const hostname = "0.0.0.0";

// # assigning a port in the local syatem
const port = 8000;

// # creating a server instance
const httpServer = http.createServer((request, response) => {
  if (request.url === "/") {
    response.statusCode = 200; // OK / Successful
    response.setHeader("Content-Type", "text/plain"); // type of content
    response.end("Welcome to Backend Course"); // Final response from the server
  } else if (request.url === "/login") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Login page");
  } else if (request.url === "/register") {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
    response.end("Register page");
  } else {
    response.statusCode = 404; // NOT Found
    response.setHeader("Content-Type", "text/plain");
    response.end("Page not found");
  }
});

// # Running the server in our local machine
// listen(port,hostname,callback)
httpServer.listen(port, hostname, () => {
  console.log(`http server listening at http://${hostname}:${port}`);
});
