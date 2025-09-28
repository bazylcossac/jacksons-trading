"use client";

import { createContext, PropsWithChildren, useEffect } from "react";
import { SendMessage } from "react-use-websocket";
import { useFavouriteCrypto } from "../FavouriteCrypto/FavouriteCrypto";

type FavouriteCryptoValues = {
  sendMessage: SendMessage;
};

const FavouriteCryptoWS = createContext<FavouriteCryptoValues>(null);

export const FavouriteCryptoProvider = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  const { sendMessage } = useFavouriteCrypto();

  return (
    <FavouriteCryptoWS.Provider value={{ sendMessage: sendMessage }}>
      {children}
    </FavouriteCryptoWS.Provider>
  );
};
