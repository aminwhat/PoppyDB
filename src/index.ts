require("dotenv").config();
import { Elysia } from "elysia";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .listen(String(Bun.env.PORT));

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
