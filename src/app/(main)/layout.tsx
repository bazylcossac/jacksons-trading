"use cache";

// TODO

// DODAC prefetch query z tantsacka zeby tutaj podawac go do providera
// a w query options zrobic refetchInterval

import getUserDataWSListenKey from "@/actions/getUserDataWSListenKey";
import AppLayout from "@/components/app/appStructure/AppLayout";
import { ReactNode } from "react";

const MainLayout = async ({ children }: { children: ReactNode }) => {
  const { listenKey } = await getUserDataWSListenKey();

  return <AppLayout listenKey={listenKey}>{children}</AppLayout>;
};

export default MainLayout;
