"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

type AppSidebarElement = {
  routes: {
    label: string;
    icon: JSX.Element;
    href: string;
  }[];
  mainLabel: string;
};

const AppSidebarElement = ({ routes, mainLabel }: AppSidebarElement) => {
  const path = usePathname();

  return (
    <div>
      <p className="text-xs pb-2">{mainLabel}</p>
      <div className="space-y-4">
        {routes.map((route) => (
          <Link href={route.href} className={cn("flex items-center gap-2")} key={route.href}>
            {route.icon}
            <p className="font-semibold">{route.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppSidebarElement;
