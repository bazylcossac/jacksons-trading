"use client";

import useFavouriteCryptoBear from "@/store/Crypto/FavouriteCrypto/favouriteCrypto.bear";
import PeriodCryptoCard from "../../user/PeriodCryptoCard";

const AppFavouriteCrypto = () => {
  const favouriteCrypto = useFavouriteCryptoBear((state) => state.tickerCrypto);

  if (!favouriteCrypto) return <p>loading...</p>;

  return (
    <PeriodCryptoCard
      openPrice={favouriteCrypto.o}
      currentPrice={favouriteCrypto.c}
      periodTime="1D"
    />
  );
};

export default AppFavouriteCrypto;
