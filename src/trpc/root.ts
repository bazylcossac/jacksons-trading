import { router } from "@/utils/server/trpc";
import { exampleRouter } from "./routes/example";
import { listenKeyRouter } from "./routes/listenKey";
import { resendRouter } from "./routes/resend";

export const appRouter = router({
  example: exampleRouter,
  resend: resendRouter,
  listenKey: listenKeyRouter,
});

export type AppRouter = typeof appRouter;
