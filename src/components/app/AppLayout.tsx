"use cache";

import { ReactNode } from "react";
import AppSidebar from "./AppSidebar";

const AppLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row">
      <AppSidebar />
      <div className="flex flex-col">
        <div>navbar</div>
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
