import { ReactNode } from "react";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row w-full">
      <AppSidebar />
      <div className="flex flex-col w-full">
        <AppHeader />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
