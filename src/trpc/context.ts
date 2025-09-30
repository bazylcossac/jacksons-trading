import { authClient } from "@/lib/auth-client";
import { inferAsyncReturnType } from "@trpc/server";

export async function createContext() {
  return {
    session: await authClient.getSession(),
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;
