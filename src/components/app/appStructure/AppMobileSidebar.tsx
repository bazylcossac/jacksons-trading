import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GoRows } from "react-icons/go";
import AppDesktopSidebar from "./AppDesktopSidebar";

const AppMobileSidebar = () => {
  return (
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
  );
};

export default AppMobileSidebar;
