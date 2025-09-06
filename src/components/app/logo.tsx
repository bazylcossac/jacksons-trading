import LogoSVG from '../../../public/logo.svg';
import Image from 'next/image';
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
