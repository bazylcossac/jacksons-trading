import { GiReceiveMoney } from "react-icons/gi";
import { IoIosHome } from "react-icons/io";
import { IoSettingsSharp } from "react-icons/io5";
import { MdSupportAgent } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export const sidebarRoutes = [
  {
    mainLabel: "MENU",
    routes: [
      {
        label: "Home",
        icon: <IoIosHome />,
        href: "/dashboard",
      },
      {
        label: "My Trades",
        icon: <RiMoneyDollarCircleFill />,
        href: "/my-trades",
      },
      {
        label: "Investments Plans",
        icon: <GiReceiveMoney />,
        href: "/investments-plans",
      },
      {
        label: "Support & Help",
        icon: <MdSupportAgent />,
        href: "/support",
      },
      {
        label: "Settings",
        icon: <IoSettingsSharp />,
        href: "/settings",
      },
    ],
  },
];
