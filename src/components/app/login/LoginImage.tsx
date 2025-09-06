import gradient from '../../../../public/gradient.webp';
import Image from 'next/image';

const LoginImage = () => {
  return (
    <div className="bg-neutral-900 rounded-[7px] h-full relative flex-1 overflow-hidden text-white">
      <div className="p-4 font-bold text-lg tracking-wider">Jackson's Trading Platform</div>
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
