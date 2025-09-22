"use client";

import useUserDataBear from "@/store/User/UserData.bear";
import { useUserDataWS } from "@/WebSockets/useUserDataWS";
import { createContext, PropsWithChildren } from "react";
import { SendMessage } from "react-use-websocket";

type UserDataWSValues = {
  sendMessage: SendMessage;
};

const UserDataWS = createContext<UserDataWSValues>(null);

export const UserDataWSProvider = ({ children }: PropsWithChildren) => {
  const listenKey = useUserDataBear.getState().listenKey;

  console.log(listenKey);

  const { sendMessage } = useUserDataWS(listenKey);

  return <UserDataWS.Provider value={{ sendMessage: sendMessage }}>{children}</UserDataWS.Provider>;
};
