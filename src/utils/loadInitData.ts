import useUserDataBear from "@/store/User/UserData.bear";

const loadInitData = () => {
  try {
    useUserDataBear.getState().fetchListenKey();
  } catch (error) {
    console.error("Failed to fetch", error);
  }
};

export default loadInitData;
