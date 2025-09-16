"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

type AppSidebarElement = {
  isHidden: boolean;
  routes: {
    label: string;
    icon: JSX.Element;
    href: string;
  }[];
  mainLabel: string;
};

const AppSidebarElement = ({ routes, mainLabel, isHidden }: AppSidebarElement) => {
  const path = usePathname();

  return (
    <div>
      {!isHidden && <p className="text-xs pb-4 text-foreground/50">{mainLabel}</p>}
      <div className="space-y-1">
        {routes.map((route) => (
          <Link
            href={route.href}
            className={cn(
              "flex items-center px-2 py-1 gap-2 rounded-md hover:bg-accent/50 transition font-medium",
              path === route.href && "text-primary bg-accent",
              isHidden && "text-3xl justify-center"
            )}
            key={route.href}
          >
            {route.icon}
            {!isHidden && <p className="text-sm font-bold">{route.label}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppSidebarElement;
