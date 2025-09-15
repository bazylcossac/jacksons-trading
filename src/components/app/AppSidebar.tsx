import { sidebarRoutes } from "@/constants/app";
import AppSidebarElement from "./AppSidebarElement";

const AppSidebar = () => {
  return (
    <nav className="w-[250px] h-screen p-4 space-y-4 border-r">
      {sidebarRoutes.map((route) => (
        <AppSidebarElement {...route} key={route.mainLabel} />
      ))}
    </nav>
  );
};

export default AppSidebar;
