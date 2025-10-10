import type { TickerSchema } from "@/@types/tickerCrypto";
import { produce } from "immer";
import { create } from "zustand";

type FavouriteTickerCrypto = {
  tickerCrypto: TickerSchema | null;
};

type FavouriteCryptoActions = {
  setFavouriteTickerCrypto: (tickerCrypto: TickerSchema) => void;
};

export type FavouriteTickerCryptoBear = FavouriteTickerCrypto & FavouriteCryptoActions;

const initValues: FavouriteTickerCrypto = {
  tickerCrypto: null,
};

const useFavouriteCryptoBear = create<FavouriteTickerCryptoBear>((set) => ({
  ...initValues,
  setFavouriteTickerCrypto: (tickerCrypto) =>
    set(
      produce<FavouriteTickerCryptoBear>((state) => {
        state.tickerCrypto = tickerCrypto;
      })
    ),
}));

export default useFavouriteCryptoBear;
