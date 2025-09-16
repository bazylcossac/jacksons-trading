"use cache";

import AppLayout from "@/components/app/appStructure/AppLayout";
import { ReactNode } from "react";

const MainLayout = async ({ children }: { children: ReactNode }) => {
  return <AppLayout>{children}</AppLayout>;
};

export default MainLayout;
