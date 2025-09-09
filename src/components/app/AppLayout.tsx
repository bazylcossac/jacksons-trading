"use cache";

import { ReactNode } from "react";
import AppSidebar from "./AppSidebar";

const AppLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <AppSidebar />
      <div>
        <div></div>
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
