import useWebSocket from "react-use-websocket";

type UseWebsocket = {
  websocketUrl: string;
  onOpen?: () => void;
  shouldReconnect: () => boolean;
};

const useWebsocket = ({ websocketUrl, onOpen }: UseWebsocket) => {
  const methods = useWebSocket(websocketUrl, {
    onOpen: onOpen,
    shouldReconnect: () => true,
    reconnectAttempts: 3,
    heartbeat: { message: "ping", returnMessage: "pong", interval: 10000 },
  });

  return { ...methods };
};

export default useWebsocket;
