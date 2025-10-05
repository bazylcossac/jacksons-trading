"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useCallback } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const AppHeaderThemeButton = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const handleMode = useCallback(() => {
    if (resolvedTheme === "dark") {
      setTheme("light");
      return;
    }
    setTheme("dark");
  }, [resolvedTheme]);

  return (
    <Button variant="secondary" onClick={handleMode} className="rounded-md size-10">
      {resolvedTheme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </Button>
  );
};

export default AppHeaderThemeButton;
