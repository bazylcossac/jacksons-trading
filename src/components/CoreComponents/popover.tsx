import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import type { PropsWithChildren, ReactNode } from "react";

type CorePopoverProps = {
  trigger: ReactNode;
  className?: string;
  triggerClassName?: string;
};

const CorePopover = ({
  children,
  trigger,
  className,
  triggerClassName,
}: PropsWithChildren<CorePopoverProps>) => {
  return (
    <Popover>
      <PopoverTrigger
        className={cn(
          "bg-primary rounded-md size-10 cursor-pointer hover:brightness-90 border-0 grid place-items-center",
          triggerClassName
        )}
      >
        {trigger}
      </PopoverTrigger>
      <PopoverContent className={cn("bg-background", className)}>{children}</PopoverContent>
    </Popover>
  );
};

export default CorePopover;
