"use client";
import { useSession } from "@/lib/auth-client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useCallback } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useDevice from "@/hooks/useDevice";
import AppNotificationPopover from "../AppNotificationPopover";
import AppMobileSidebar from "../AppSidebar/AppMobileSidebar";
import AppFavouriteCrypto from "./AppFavouriteCrypto";
const AppHeader = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const { data } = useSession();
  const { isMobile } = useDevice();

  const handleMode = useCallback(() => {
    if (resolvedTheme === "dark") {
      setTheme("light");
      return;
    }
    setTheme("dark");
  }, [resolvedTheme]);

  return (
    <header className="flex items-center justify-between p-4 border-b w-full">
      <div className="flex items-center gap-4 h-full">
        {isMobile && <AppMobileSidebar />}
        <Input
          type="text"
          placeholder="Search..."
          className="placeholder:text-sm max-w-[300px] h-full"
        />
      </div>
      <div>
        <AppFavouriteCrypto />
      </div>

      <div className="flex gap-3">
        <Button variant="secondary" onClick={handleMode} className="rounded-md size-10">
          {resolvedTheme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </Button>
        <AppNotificationPopover />
        {/* <Button className="rounded-md size-10 cursor-pointer hover:brightness-90">
          <MdNotificationsNone />
        </Button> */}
        {data?.user.image ? (
          <Image
            width={100}
            height={100}
            alt="user image"
            src={data.user.image}
            className="size-10 rounded-md cursor-pointer hover:brightness-90"
          />
        ) : (
          <div className="rounded-full size-10 bg-accent grid place-items-center font-bold cursor-pointer hover:brightness-90">
            {data?.user.name.slice(1, 2).toUpperCase() || "U"}
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
