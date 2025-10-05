"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import useDevice from "@/hooks/useDevice";
import { GoRows } from "react-icons/go";
import AppDesktopSidebar from "./AppDesktopSidebar";

const AppMobileSidebar = () => {
  const { isMobile } = useDevice();
  return (
    <>
      {isMobile ? (
        <div>
          <Sheet>
            <SheetTrigger>
              {" "}
              <Button variant="secondary" className="cursor-pointer size-10" size="sm">
                <GoRows />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetDescription>
                  <AppDesktopSidebar />
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      ) : null}
    </>
  );
};

export default AppMobileSidebar;
