import getUserDataWSListenKey from "@/actions/getUserDataWSListenKey";
import { produce } from "immer";
import { toast } from "sonner";
import { create } from "zustand";
type UserDataInitValues = {
  listenKey: string;
};

type UserDataActions = {
  setListenKey: (listenKey: string) => void;
  fetchListenKey: () => void;
};

type UserDataBear = UserDataInitValues & UserDataActions;

const initValues = {
  listenKey: "",
};

const useUserDataBear = create<UserDataBear>((set) => ({
  ...initValues,
  fetchListenKey: async () => {
    const { listenKey } = await getUserDataWSListenKey();

    if (!listenKey) {
      console.error("Failed to get user data");
      toast.error("Failed to get user data");
      return;
    }

    set(
      produce<UserDataBear>((state) => {
        state.listenKey = listenKey;
      })
    );
  },
  setListenKey: (listenKey) =>
    set(
      produce<UserDataBear>((state) => {
        state.listenKey = listenKey;
      })
    ),
}));

export default useUserDataBear;
