import { USER_DATA_WS_V3 } from "@/constants/websocket/websocket";
import useWebsocket from "@/hooks/useWebsocket";

export const useUserDataWS = (listenKey: string) => {
  const onMessage = (event: MessageEvent) => {
    console.log(event.data);
  };

  const methods = useWebsocket({
    websocketUrl: `${USER_DATA_WS_V3}${listenKey}`,
    onMessage: onMessage,
    onOpen: () => console.log("User WS - connected"),
  });

  return { ...methods };
};
