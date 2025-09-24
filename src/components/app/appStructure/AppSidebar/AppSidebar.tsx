"use client";
import useDevice from "@/hooks/useDevice";
import AppDesktopSidebar from "./AppDesktopSidebar";

const AppSidebar = () => {
  const { isMobile } = useDevice();

  if (isMobile) return null;

  return <AppDesktopSidebar />;
};

export default AppSidebar;
