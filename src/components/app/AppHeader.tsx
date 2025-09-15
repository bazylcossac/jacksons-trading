"use client";
import { authClient } from "@/lib/auth-client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useCallback } from "react";
import { GoRows } from "react-icons/go";
import { MdNotificationsNone, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
const AppHeader = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const { data } = authClient.useSession();
  console.log(data);

  const handleMode = useCallback(() => {
    if (resolvedTheme === "dark") {
      setTheme("light");
      return;
    }
    setTheme("dark");
  }, [resolvedTheme]);

  return (
    <header className="flex items-center justify-between p-4 border-b w-full ">
      <div className="flex items-center gap-4">
        <Button variant="secondary" className="cursor-pointer">
          <GoRows />
        </Button>
        <Input type="text" placeholder="Search..." className="placeholder:text-sm min-w-[200px]" />
      </div>
      <div className="flex gap-3">
        <Button variant="secondary" onClick={handleMode} className="rounded-full size-10">
          {resolvedTheme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </Button>
        <Button className="rounded-full size-10 cursor-pointer hover:brightness-90">
          <MdNotificationsNone />
        </Button>
        {data?.user.image ? (
          <Image
            width={100}
            height={100}
            alt="user image"
            src={data?.user.image}
            className="size-10 rounded-full cursor-pointer hover:brightness-90"
          />
        ) : (
          <div className="rounded-full size-10 bg-accent">{data?.user.name.slice(1, 2)}</div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
