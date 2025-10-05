"use cache";

// zmienic na trpc prefetch

import AppLayout from "@/components/app/appStructure/AppLayout";
import HydrationProvider from "@/query/HydrationProvider";
import { userGetDataListenKeyQueryOptions } from "@/query/User/useGetUserDataListenKey";
import { getQueryClient } from "@/utils/getQueryClient";
import { dehydrate } from "@tanstack/react-query";
import type { ReactNode } from "react";

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
