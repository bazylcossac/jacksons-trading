"use cache";

import getUserDataWSListenKey from "@/actions/getUserDataWSListenKey";
import { UserDataWSProvider } from "@/AppInit/UserDataWSProvider";
import AppLayout from "@/components/app/appStructure/AppLayout";
import { ReactNode } from "react";

const MainLayout = async ({ children }: { children: ReactNode }) => {
  const { listenKey } = await getUserDataWSListenKey();

  return (
    <UserDataWSProvider listenKey={listenKey}>
      <AppLayout>{children}</AppLayout>
    </UserDataWSProvider>
  );
};

export default MainLayout;
