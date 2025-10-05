"use client";

import useUserDataBear from "@/store/User/UserData.bear";
import { useUserDataWS } from "@/WebSockets/useUserDataWS";
import { createContext, type PropsWithChildren, useEffect } from "react";
import type { SendMessage } from "react-use-websocket";

type UserDataWSValues = {
  sendMessage: SendMessage;
};

type UserDataWSProvider = {
  listenKey: string;
};

const UserDataWS = createContext<UserDataWSValues | null>(null);

export const UserDataWSProvider = ({
  children,
  listenKey,
}: PropsWithChildren<UserDataWSProvider>) => {
  useEffect(() => {
    useUserDataBear.getState().setListenKey(listenKey);
  }, []);

  const { sendMessage } = useUserDataWS(listenKey);

  return <UserDataWS.Provider value={{ sendMessage: sendMessage }}>{children}</UserDataWS.Provider>;
};
