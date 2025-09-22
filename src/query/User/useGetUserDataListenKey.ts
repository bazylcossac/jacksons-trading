import { getUserDataWSListenKey } from "@/actions/getUserDataWSListenKey";
import { QUERY_KEYS } from "@/constants/queryKeys";
import useUserDataBear from "@/store/User/UserData.bear";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const userGetDataListenKeyQueryOptions = () => {
  return queryOptions({
    queryKey: [QUERY_KEYS.LISTEN_KEY],
    queryFn: async () => {
      const { listenKey } = await getUserDataWSListenKey();
      useUserDataBear.getState().setListenKey(listenKey);
      return listenKey;
    },
    refetchInterval: 1000 * 60 * 30,
    staleTime: 1000 * 60 * 30,
  });
};

export const useGetUserDataListenKey = () => useQuery(userGetDataListenKeyQueryOptions());
