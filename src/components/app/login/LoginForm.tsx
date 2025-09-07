'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FcGoogle as GoogleIcon } from 'react-icons/fc';
import { Login, LoginSchema } from '@/@types/app/login';
import LoginPasswordHoverCard from './LoginPasswordHoverCard';
import LoginPasswordInput from './LoginPasswordInput';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: zodResolver(LoginSchema), defaultValues: { email: '', password: '' } });

  const submitAction = (data: Login) => {
    console.log('submit');
    console.log(data);
  };

  return (
    <div className="w-1/2 flex flex-col text-center items-center justify-center">
      <div className="pb-4 space-y-2">
        <h2 className="text-3xl">Log in</h2>
        <p>Join modern trading platform now.</p>
      </div>
      <form
        className="w-full flex flex-col items-center justify-center gap-2"
        onSubmit={handleSubmit(submitAction)}
      >
        <Input
          className="max-w-[280px]"
          placeholder="example@example.com"
          type="email"
          {...register('email')}
        />
        {errors.email ? (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        ) : (
          <div className="h-4"></div>
        )}
        <div className="flex flex-col w-[280px] items-stretch">
          <LoginPasswordInput control={control} />
        </div>
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
