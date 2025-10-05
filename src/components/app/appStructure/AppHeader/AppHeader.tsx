import AppNotificationPopover from "../AppNotificationPopover";
import AppMobileSidebar from "../AppSidebar/AppMobileSidebar";
import AppHeaderSearch from "./AppHeaderSearch";
import AppHeaderThemeButton from "./AppHeaderThemeButton";
import AppHeaderUser from "./AppHeaderUser";

const AppHeader = async () => {
  return (
    <header className="flex items-center justify-between p-4 border-b w-full">
      <div className="flex items-center gap-4 h-full">
        <AppMobileSidebar />
        <AppHeaderSearch />
      </div>

      <div className="flex gap-3">
        <AppHeaderThemeButton />
        <AppNotificationPopover />
        <AppHeaderUser />
      </div>
    </header>
  );
};

export default AppHeader;
