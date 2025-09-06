'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';

const LoginForm = () => {
  const { register } = useForm();

  return (
    <div className="w-1/2 flex flex-col text-center items-center justify-center">
      <div className="pb-4 space-y-2">
        <h2 className="text-3xl">Log in</h2>
        <p>Join modern trading platform now.</p>
      </div>
      <form className="w-full flex flex-col items-center justify-center gap-8">
        <Input className="max-w-[250px]" placeholder="example@example.com" type="email" />
        <Input className="max-w-[250px]" placeholder="password" type="password" />

        <Button variant="secondary" className="cursor-pointer" type="submit">
          Log in
        </Button>
      </form>
      <div className="py-4">
        <p className="text-black/70">or</p>
      </div>

      <div className="border rounded-md p-1 border-black/30 hover:border-black hover:bg-black/80 cursor-pointer transition">
        <GoogleIcon size={30} />
      </div>
    </div>
  );
};

export default LoginForm;
