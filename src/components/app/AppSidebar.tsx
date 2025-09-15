import { sidebarRoutes } from "@/constants/app";
import AppSidebarElement from "./AppSidebarElement";

const AppSidebar = () => {
  return (
    <nav className="min-w-[300px] h-screen  pl-4 pt-4 ">
      {sidebarRoutes.map((route) => (
        <AppSidebarElement {...route} key={route.mainLabel} />
      ))}
    </nav>
  );
};

export default AppSidebar;
