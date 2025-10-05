import { router } from "@/utils/server/trpc";
import { exampleRouter } from "./routes/example";
import { resendRouter } from "./routes/resend";

export const appRouter = router({
  example: exampleRouter,
  resend: resendRouter,
});

export type AppRouter = typeof appRouter;
