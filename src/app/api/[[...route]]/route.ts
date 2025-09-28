import { Hono } from "hono";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => c.json({ message: "Hello Next.js!" }));

// typy dla klienta:
export type AppType = typeof app;

// exporty dla Next.js:
export const GET = handle(app);
export const POST = handle(app);
