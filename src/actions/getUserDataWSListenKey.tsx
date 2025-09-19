"use server";

import { binanceAxiosInstance } from "@/utils/axios";
import { z } from "zod";

const ListenKey = z.object({
  listenKey: z.string(),
});

const getUserDataWSListenKey = async () => {
  const response = await binanceAxiosInstance.post(
    "/userDataStream",
    null, // body jest puste
    {
      headers: {
        "X-MBX-APIKEY": process.env.BINANCE_API_KEY!,
      },
    }
  );

  const safeData = await ListenKey.safeParseAsync(response.data);

  console.log(safeData);

  if (!safeData.success) {
    throw new Error("Failed to init");
  }

  return safeData.data;
};

export default getUserDataWSListenKey;
