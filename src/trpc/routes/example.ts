import { publicProcedure, router } from "@/utils/server/trpc";
import { z } from "zod";

export const exampleRouter = router({
  hello: publicProcedure.input(z.object({ text: z.string() })).query(({ input }) => {
    return {
      greeting: `Hello ${input.text}`,
    };
  }),
});
