"use client";

import BREAKPOINTS from "@/constants/breakpoints";
import { useEffect, useState } from "react";

const useDevice = () => {
  const [width, setWidth] = useState<number | null>(
    typeof window !== "undefined" ? window.innerWidth : null
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResizeWindow = () => {
      setWidth(window.innerWidth);
    };

    handleResizeWindow();

    window.addEventListener("resize", handleResizeWindow);
    return () => window.removeEventListener("resize", handleResizeWindow);
  }, []);

  const isMobile = width !== null ? width <= BREAKPOINTS.md : false;
  const isDesktop = width !== null ? width >= BREAKPOINTS.md : false;

  return { isMobile, isDesktop };
};

export default useDevice;
