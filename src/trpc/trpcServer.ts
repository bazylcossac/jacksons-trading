import { createContext } from "@/trpc/context";
import { createHydrationHelpers } from "@trpc/react-query/rsc";
import "server-only";

import { createCallerFactory } from "@/utils/server/trpc";
import { cache } from "react";
import { makeQueryClient } from "./query-client";
import { AppRouter, appRouter } from "./root";

export const getQueryClient = cache(makeQueryClient);

const caller = createCallerFactory(appRouter)(createContext);
export const { trpc: trpcServer, HydrateClient } = createHydrationHelpers<AppRouter>(
  caller,
  getQueryClient
);
