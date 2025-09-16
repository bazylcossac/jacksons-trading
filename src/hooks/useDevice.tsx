import BREAKPOINTS from "@/constants/breakpoints";
import { useEffect, useState } from "react";

const useDevice = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResizeWindow = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResizeWindow);

    return () => window.removeEventListener("resize", handleResizeWindow);
  }, [window.innerWidth]);

  return {
    isMobile: width <= BREAKPOINTS.md,
    isDesktop: width >= BREAKPOINTS.md,
  };
};

export default useDevice;
