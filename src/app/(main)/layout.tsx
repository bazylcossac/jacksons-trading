"use cache";

import AppLayout from "@/components/app/appStructure/AppLayout";
import HydrationProvider from "@/query/HydrationProvider";
import { userGetDataListenKeyQueryOptions } from "@/query/User/useGetUserDataListenKey";
import { getQueryClient } from "@/utils/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import { ReactNode } from "react";

const MainLayout = async ({ children }: { children: ReactNode }) => {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(userGetDataListenKeyQueryOptions());

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationProvider state={dehydratedState}>
      <AppLayout>{children}</AppLayout>
    </HydrationProvider>
  );
};

export default MainLayout;
