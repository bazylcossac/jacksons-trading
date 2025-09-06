import gradient from '../../../../public/gradient.webp';
import Image from 'next/image';

const LoginImage = () => {
  return (
    <div>
      <Image src={gradient} alt="gradient" width={500} height={1000} />
    </div>
  );
};

export default LoginImage;
