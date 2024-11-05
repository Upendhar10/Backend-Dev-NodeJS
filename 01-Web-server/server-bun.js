// # Building a server in bun environment

import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Home page", { status: 200 });
    } else if (url.pathname === "/login") {
      return new Response("Login", { status: 200 });
    } else {
      return new Response("Not Found", { status: 404 });
    }
  },
  hostname: "127.0.0.1",
  port: 3000,
});
