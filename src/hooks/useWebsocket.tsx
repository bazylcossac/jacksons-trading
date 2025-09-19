import useWebSocket from "react-use-websocket";

type UseWebsocket = {
  options: {
    websocketUrl: string;
    onMessage: (event: MessageEvent) => void;
    onOpen?: () => void;
    shouldReconnect?: () => boolean;
  };
};

const useWebsocket = ({
  websocketUrl,
  onOpen,
  onMessage,
  shouldReconnect,
}: UseWebsocket["options"]) => {
  const methods = useWebSocket(websocketUrl, {
    onOpen: onOpen,
    shouldReconnect: shouldReconnect || (() => true),
    reconnectAttempts: 3,
    heartbeat: { message: "ping", returnMessage: "pong", interval: 10000 },
    onMessage: onMessage,
  });

  return { ...methods };
};

export default useWebsocket;
