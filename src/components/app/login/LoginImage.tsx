import gradient from '../../../../public/gradient.webp';
import Image from 'next/image';
import Logo from '../logo';

const LoginImage = () => {
  return (
    <div className="bg-neutral-900 rounded-[7px] h-full relative flex-1 overflow-hidden text-white width-1/2">
      <div className="p-4 font-bold text-lg tracking-wider text-white/90 flex items-center gap-2">
        <Logo width={30} height={30} alt="logo" className="rounded-full " />
        Jackson's <span className="font-light">Trading Platform</span>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-2">
        <p className="text-3xl font-bold">Real-time trading platform, out of the box</p>
        <p className="text-md  text-white/80">Manage your money independly, smart and fast</p>
      </div>
      <div className="absolute -right-60 bottom-10">
        <Image
          src={gradient}
          alt="gradient"
          width={500}
          height={1000}
          className="object-cover rounded-[7px]"
        />
      </div>
    </div>
  );
};

export default LoginImage;
