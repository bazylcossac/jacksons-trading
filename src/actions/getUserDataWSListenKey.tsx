"use server";

import { binanceAxiosInstance } from "@/utils/axios";
import { z } from "zod";

const ListenKey = z.object({
  listenKey: z.string(),
});

export const getUserDataWSListenKey = async () => {
  const response = await binanceAxiosInstance.post("/userDataStream", null, {
    headers: {
      "X-MBX-APIKEY": process.env.BINANCE_API_KEY!,
    },
  });

  const safeData = await ListenKey.safeParseAsync(response.data);

  if (!safeData.success) {
    throw new Error("Failed to init");
  }

  return safeData.data;
};

export const keepUserDataWSListenKey = async (listenKey: string) => {
  await binanceAxiosInstance.put(`/userDataStream?listenKey=${listenKey}`, null, {
    headers: {
      "X-MBX-APIKEY": process.env.BINANCE_API_KEY!,
    },
  });

  return listenKey;
};
