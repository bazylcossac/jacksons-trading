import { authClient } from "@/lib/auth-client";

const loadInitData = () => {
  try {
    // useUserDataBear.getState().fetchListenKey();
    authClient.revokeOtherSessions();
  } catch (error) {
    console.error("Failed to fetch", error);
  }
};

export default loadInitData;
