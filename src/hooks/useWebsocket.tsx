import useWebSocket from "react-use-websocket";

type UseWebsocket = {
  options: {
    websocketUrl: string;
    onMessage: (event: MessageEvent) => void;
    onOpen?: () => void;
    shouldReconnect?: () => boolean;
  };
};

const useWebsocket = ({ websocketUrl, onOpen, onMessage }: UseWebsocket["options"]) => {
  const methods = useWebSocket(websocketUrl, {
    onOpen: onOpen,
    onMessage: onMessage,
  });

  return { ...methods };
};

export default useWebsocket;
