import { Hono } from "hono";

export const helloRoute = new Hono().get("/", (c) => c.json({ message: "Hello Next.js!" }));
