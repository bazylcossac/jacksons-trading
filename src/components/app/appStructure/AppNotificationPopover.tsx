import CorePopover from "@/components/CoreComponents/popover";
import { MdNotificationsNone } from "react-icons/md";

const AppNotificationPopover = () => {
  return (
    <CorePopover trigger={<MdNotificationsNone size={20} />}>
      <div>
        <p className="text-sm text-foreground">Notifications</p>
      </div>
    </CorePopover>
  );
};

export default AppNotificationPopover;
