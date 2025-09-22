import { produce } from "immer";
import { create } from "zustand";
type UserDataInitValues = {
  listenKey: string;
};

type UserDataActions = {
  setListenKey: (listenKey: string) => void;
};

type UserDataBear = UserDataInitValues & UserDataActions;

const initValues = {
  listenKey: "",
};

const useUserDataBear = create<UserDataBear>((set) => ({
  ...initValues,
  setListenKey: (listenKey) =>
    set(
      produce<UserDataBear>((state) => {
        state.listenKey = listenKey;
      })
    ),
}));

export default useUserDataBear;
