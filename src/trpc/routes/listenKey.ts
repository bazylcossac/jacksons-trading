import { getUserDataWSListenKey } from "@/actions/getUserDataWSListenKey";
import { publicProcedure, router } from "@/utils/server/trpc";

export const listenKeyRouter = router({
  getListenKey: publicProcedure.query(async () => {
    const { listenKey } = await getUserDataWSListenKey();
    return listenKey;
  }),
});
