import type { AppType } from "@/server/hono/app";
import { hc } from "hono/client";

const getBaseUrl = () => {
  if (typeof window !== "undefined") return "";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  const port = process.env.PORT ?? 3000;
  return `http://localhost:${port}`;
};

export const honoClient = hc<AppType>(getBaseUrl());

export type HonoClient = typeof honoClient;
export default honoClient;
