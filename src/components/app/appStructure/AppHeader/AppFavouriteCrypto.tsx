"use client";
// TODO add loading skeleton | zmienic nazwe period card
import useFavouriteCryptoBear from "@/store/Crypto/FavouriteCrypto/favouriteCrypto.bear";
import UserPorfilPeriodCard from "../../user/UserProfitPeriodCard";

const AppFavouriteCrypto = () => {
  const favouriteCrypto = useFavouriteCryptoBear((state) => state.tickerCrypto);

  if (!favouriteCrypto) return <p>loading...</p>;

  return (
    <UserPorfilPeriodCard
      openPrice={favouriteCrypto.o}
      currentPrice={favouriteCrypto.c}
      periodTime="1D"
    />
  );
};

export default AppFavouriteCrypto;
