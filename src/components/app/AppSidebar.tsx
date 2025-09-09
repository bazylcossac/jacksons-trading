import { sidebarRoutes } from "@/constants/app";
import AppSidebarElement from "./AppSidebarElement";

const AppSidebar = () => {
  return (
    <nav>
      {sidebarRoutes.map((route) => (
        <AppSidebarElement {...route} key={route.label} />
      ))}
    </nav>
  );
};

export default AppSidebar;
