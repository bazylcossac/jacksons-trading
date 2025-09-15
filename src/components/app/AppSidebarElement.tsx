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
      <p className="text-xs pb-4 text-foreground/50">{mainLabel}</p>
      <div className="space-y-1">
        {routes.map((route) => (
          <Link
            href={route.href}
            className={cn(
              "flex items-center px-2 py-1 gap-2 rounded-md hover:bg-accent/50 transition font-medium",
              path === route.href && "text-primary bg-accent"
            )}
            key={route.href}
          >
            {route.icon}
            <p className="text-sm">{route.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AppSidebarElement;
