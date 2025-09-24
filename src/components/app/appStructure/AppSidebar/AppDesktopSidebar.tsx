"use client";
import { sidebarRoutes } from "@/constants/app";
import useDevice from "@/hooks/useDevice";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { GoRows } from "react-icons/go";
import { Button } from "../../../ui/button";
import AppSidebarElement from "./AppSidebarElement";

const AppDesktopSidebar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const { isMobile } = useDevice();

  return (
    <nav
      className={cn(
        "w-[250px] h-full p-4 space-y-4 border-r transition",
        isHidden && "w-[70px]",
        isMobile && "border-none p-0"
      )}
    >
      {!isMobile && (
        <Button
          variant="secondary"
          className="cursor-pointer size-10"
          size="sm"
          onClick={() => setIsHidden((prev) => !prev)}
        >
          <GoRows className={cn("rotate-90 transition", isHidden && "rotate-0")} />
        </Button>
      )}

      {sidebarRoutes.map((route) => (
        <AppSidebarElement {...route} key={route.mainLabel} isHidden={isHidden} />
      ))}
    </nav>
  );
};

export default AppDesktopSidebar;
