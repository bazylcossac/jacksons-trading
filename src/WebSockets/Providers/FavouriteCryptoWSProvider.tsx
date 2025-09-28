"use client";

import { createContext, PropsWithChildren } from "react";
import { SendMessage } from "react-use-websocket";
import { useFavouriteCrypto } from "../FavouriteCrypto/FavouriteCrypto";

type FavouriteCryptoValues = {
  sendMessage: SendMessage;
};

const FavouriteCryptoWS = createContext<FavouriteCryptoValues>(null);

export const FavouriteCryptoProvider = ({ children }: PropsWithChildren) => {
  const { sendMessage } = useFavouriteCrypto();

  return (
    <FavouriteCryptoWS.Provider value={{ sendMessage: sendMessage }}>
      {children}
    </FavouriteCryptoWS.Provider>
  );
};
