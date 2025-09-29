import { helloRoute } from "@/server/hono/routes/hello";
import { Hono } from "hono";
import { healthRoute } from "./routes/health";

const app = new Hono().basePath("/api").route("/hello", helloRoute).route("/health", healthRoute);
export default app;
export type AppType = typeof app;
