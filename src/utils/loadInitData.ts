import { revokeOtherSessions } from "@/lib/auth-client";

const loadInitData = () => {
  try {
    revokeOtherSessions();
  } catch (error) {
    console.error("Failed to fetch", error);
  }
};

export default loadInitData;
