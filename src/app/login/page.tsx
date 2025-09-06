import LoginForm from '@/components/app/login/LoginForm';
import LoginImage from '@/components/app/login/LoginImage';

const LoginPage = () => {
  return (
    <div className="bg-white w-full h-screen text-black flex p-2">
      <LoginImage />

      <LoginForm />
    </div>
  );
};

export default LoginPage;
