import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { MdNotificationsNone } from "react-icons/md";

const AppNotificationPopover = () => {
  return (
    <Popover>
      <PopoverTrigger className="bg-primary rounded-md size-10 cursor-pointer hover:brightness-90 border-0 grid place-items-center">
        <MdNotificationsNone size={20} />
      </PopoverTrigger>
      <PopoverContent>
        <div>
          <p className="text-sm text-foreground">Notifications</p>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default AppNotificationPopover;
