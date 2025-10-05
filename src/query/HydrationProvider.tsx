"use client";

import {
  type DehydratedState,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { type PropsWithChildren, useState } from "react";

type HydrationProvider = {
  state: DehydratedState;
};

const HydrationProvider = ({ state, children }: PropsWithChildren<HydrationProvider>) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={state}>{children}</HydrationBoundary>
    </QueryClientProvider>
  );
};

export default HydrationProvider;
