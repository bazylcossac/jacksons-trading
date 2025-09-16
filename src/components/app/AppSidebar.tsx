"use client";
import { sidebarRoutes } from "@/constants/app";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { GoRows } from "react-icons/go";
import { Button } from "../ui/button";
import AppSidebarElement from "./AppSidebarElement";

const AppSidebar = () => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <nav className={cn("w-[250px] h-screen p-4 space-y-4 border-r", isHidden && "w-[70px]")}>
      <Button
        variant="secondary"
        className="cursor-pointer"
        size="sm"
        onClick={() => setIsHidden((prev) => !prev)}
      >
        <GoRows />
      </Button>
      {sidebarRoutes.map((route) => (
        <AppSidebarElement {...route} key={route.mainLabel} isHidden={isHidden} />
      ))}
    </nav>
  );
};

export default AppSidebar;
