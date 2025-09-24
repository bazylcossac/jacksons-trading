import { TickerSchema } from "@/@types/tickerCrypto";
import { USER_DATA_WS_V3 } from "@/constants/websocket/websocket";
import useWebsocket from "@/hooks/useWebsocket";
import useFavouriteCryptoBear from "@/store/Crypto/FavouriteCrypto/favouriteCrypto.bear";

export const useFavouriteCrypto = () => {
  const onMessage = (event: MessageEvent) => {
    const safeData = TickerSchema.safeParse(JSON.parse(event.data));
    console.log(safeData);

    if (!safeData.success) return;

    useFavouriteCryptoBear.getState().setFavouriteTickerCrypto(safeData.data);
  };

  const methods = useWebsocket({
    websocketUrl: `${USER_DATA_WS_V3}btcusdt@ticker`,
    onMessage: onMessage,
    onOpen: () => console.log("Favourite crypto WS - connected"),
  });

  return { ...methods };
};
