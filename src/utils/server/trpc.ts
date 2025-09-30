import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { Context } from "../../trpc/context";

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const createCallerFactory = t.createCallerFactory;

export const protectedProcedure = t.procedure.use(function isAuthed(opts) {
  if (!opts.ctx.session.data?.session) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
    });
  }

  return opts.next({
    ctx: {
      session: opts.ctx.session,
    },
  });
});
