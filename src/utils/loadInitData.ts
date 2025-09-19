import { authClient } from "@/lib/auth-client";
import useUserDataBear from "@/store/User/UserData.bear";

const loadInitData = () => {
  try {
    useUserDataBear.getState().fetchListenKey();
    authClient.revokeOtherSessions();
  } catch (error) {
    console.error("Failed to fetch", error);
  }
};

export default loadInitData;
