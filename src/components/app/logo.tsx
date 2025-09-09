import Image from "next/image";
import LogoSVG from "../../../public/logo.svg";
type Logo = {
  width: number;
  height: number;
  alt: string;
  className?: string;
};

const Logo = (props: Logo) => {
  return <Image {...props} src={LogoSVG} />;
};

export default Logo;
