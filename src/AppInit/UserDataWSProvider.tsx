"use client";

import { useUserDataWS } from "@/WebSockets/useUserDataWS";
import { createContext, PropsWithChildren } from "react";
import { SendMessage } from "react-use-websocket";

type UserDataWSValues = {
  sendMessage: SendMessage;
};

type UserDataWSProps = {
  listenKey: string;
};

const UserDataWS = createContext<UserDataWSValues>(null);

export const UserDataWSProvider = ({ listenKey, children }: PropsWithChildren<UserDataWSProps>) => {
  const { sendMessage } = useUserDataWS(listenKey);

  return <UserDataWS.Provider value={{ sendMessage: sendMessage }}>{children}</UserDataWS.Provider>;
};
