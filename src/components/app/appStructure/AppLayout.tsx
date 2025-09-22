"use client";

import { useGetUserDataListenKey } from "@/query/User/useGetUserDataListenKey";
import { UserDataWSProvider } from "@/WebSockets/Providers/UserDataWSProvider";
import { PropsWithChildren } from "react";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

const AppLayout = ({ children }: PropsWithChildren) => {
  const { isLoading, data: listenKey } = useGetUserDataListenKey();

  if (isLoading || !listenKey) {
    return <p>loading...</p>;
  }

  return (
    <UserDataWSProvider listenKey={listenKey}>
      <div className="flex flex-row w-full h-screen">
        <AppSidebar />
        <div className="flex flex-col w-full">
          <AppHeader />
          {children}
        </div>
      </div>
    </UserDataWSProvider>
  );
};

export default AppLayout;
