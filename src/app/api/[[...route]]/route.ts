import app from "@/server/hono/app";
import { handle } from "hono/vercel";
export type { AppType } from "@/server/hono/app";

export const GET = handle(app);
export const POST = handle(app);
