import { cn } from "@/lib/utils";
import Link from "next/link";

type RouteGridElement = {
  href: string;
  title: string;
  classNames?: string;
};

const RouteGridElement = ({ href, title, classNames }: RouteGridElement) => {
  return (
    <Link
      className={cn(
        "rounded-sm h-10 grid place-items-center font-bold hover:brightness-90 transition text-xs md:text-sm ",
        classNames
      )}
      href={href}
    >
      {title}
    </Link>
  );
};

export default RouteGridElement;
