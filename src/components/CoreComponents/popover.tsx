import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { PropsWithChildren, ReactNode } from "react";

type CorePopoverProps = {
  trigger: ReactNode;
  className?: string;
};

const CorePopover = ({ children, trigger, className }: PropsWithChildren<CorePopoverProps>) => {
  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "bg-primary rounded-md size-10 cursor-pointer hover:brightness-90 border-0 grid place-items-center",
          className
        )}
      >
        {trigger}
      </PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
};

export default CorePopover;
