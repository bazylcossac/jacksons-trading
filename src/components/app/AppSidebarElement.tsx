import Link from "next/link";
import { JSX } from "react";

type AppSidebarElement = {
  label: string;
  icon: JSX.Element;
  href: string;
};

const AppSidebarElement = ({ label, icon, href }: AppSidebarElement) => {
  return (
    <Link href={href} className="flex items-center gap-2">
      {icon}
      <p>{label}</p>
    </Link>
  );
};

export default AppSidebarElement;
