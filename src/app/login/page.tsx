import LoginForm from '@/components/app/login/LoginForm';
import LoginImage from '@/components/app/login/LoginImage';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="bg-white w-full h-screen text-black p-2 relative flex flex-col md:flex-row">
      <LoginImage />
      <LoginForm />
      <div className="absolute bottom-2 right-2">
        <Link href="/register" className="text-xs underline text-black/60">
          Don't have account?
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
