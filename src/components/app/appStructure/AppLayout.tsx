import { UserDataWSProvider } from "@/AppInit/UserDataWSProvider";
import { ReactNode, Suspense } from "react";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

const AppLayout = ({ children, listenKey }: { children: ReactNode; listenKey: string }) => {
  return (
    <Suspense>
      <UserDataWSProvider listenKey={listenKey}>
        <div className="flex flex-row w-full">
          <AppSidebar />
          <div className="flex flex-col w-full">
            <AppHeader />
            {children}
          </div>
        </div>
      </UserDataWSProvider>
    </Suspense>
  );
};

export default AppLayout;
