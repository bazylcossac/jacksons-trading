import { router } from "@/utils/server/trpc";
import { exampleRouter } from "./routes/example";

export const appRouter = router({
  example: exampleRouter,
});

export type AppRouter = typeof appRouter;
