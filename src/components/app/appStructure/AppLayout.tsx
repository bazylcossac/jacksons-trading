import { trpcServer } from "@/trpc/trpcServer";
import { UserDataWSProvider } from "@/WebSockets/Providers/UserDataWSProvider";
import { Suspense, type PropsWithChildren } from "react";
import AppHeader from "./AppHeader/AppHeader";
import AppSidebar from "./AppSidebar/AppSidebar";

const AppLayout = async ({ children }: PropsWithChildren) => {
  const listenKey = await trpcServer.listenKey.getListenKey();

  return (
    <div className="flex flex-row w-full h-screen">
      <AppSidebar />

      <div className="flex flex-col w-full">
        <AppHeader />
        <Suspense>
          <UserDataWSProvider listenKey={listenKey}>{children}</UserDataWSProvider>
        </Suspense>
      </div>
    </div>
  );
};

export default AppLayout;
