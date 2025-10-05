"use client";
import { type Login, LoginSchema } from "@/@types/app/login";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FcGoogle as GoogleIcon } from "react-icons/fc";
import { toast } from "sonner";
import { SpinnerCircularFixed } from "spinners-react";
import PasswordInput from "../PasswordInput";

const LoginForm = () => {
  const [showLoading, setShowLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginSchema),
    defaultValues: { email: "", password: "", rememberMe: false },
  });

  const loginCredentials = async (userData: Login) => {
    const { email, password, rememberMe } = userData;
    await authClient.signIn.email(
      {
        email,
        password,
        callbackURL: "/dashboard",
        rememberMe,
      },
      {
        onSuccess: () => {
          setShowLoading(false);
        },
        onRequest: () => setShowLoading(true),
        onError: (error) => {
          toast.error(error.error.message);
          console.log(error);
          setShowLoading(false);
        },
      }
    );
  };

  const loginGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
      fetchOptions: {
        onError: (error) => {
          toast.error(error.error.message);
        },
      },
    });
  };

  return (
    <div className="md:w-1/2 flex flex-col text-center items-center justify-center md:pt-0 pt-10">
      <div className="pb-4 space-y-2">
        <h2 className="text-3xl">Log in</h2>
        <p>Join modern trading platform now.</p>
      </div>
      <form
        className="flex flex-col items-center justify-center gap-2 "
        onSubmit={handleSubmit(loginCredentials)}
      >
        <Input
          className="max-w-[280px]"
          placeholder="example@example.com"
          type="email"
          {...register("email")}
        />
        {errors.email ? (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        ) : (
          <div className="h-4"></div>
        )}
        <div className="flex flex-col w-[280px] items-stretch">
          <PasswordInput control={control} />
        </div>
        <div className="flex justify-between items-center gap-1 pb-4 w-full">
          <div className="flex gap-1">
            <Controller
              name="rememberMe"
              control={control}
              render={({ field }) => (
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="cursor-pointer"
                />
              )}
            />
            <p className="text-xs text-black/60">Remember me</p>
          </div>
          <div className="flex gap-1">
            <Link href="/" className="text-xs text-black/60 underline">
              Forgot password?
            </Link>
          </div>
        </div>
        <Button className="cursor-pointer" type="submit">
          {showLoading ? (
            <SpinnerCircularFixed
              size={50}
              thickness={180}
              speed={100}
              color="rgba(255, 255, 255, 1)"
              secondaryColor="rgba(0, 0, 0, 0.44)"
            />
          ) : (
            "Log in"
          )}
        </Button>
      </form>
      <div className="py-4">
        <p className="text-black/70">or</p>
      </div>

      <div
        className="border rounded-md p-1 border-black/30 hover:border-black hover:bg-black/80 cursor-pointer transition"
        onClick={loginGoogle}
      >
        <GoogleIcon size={30} />
      </div>
    </div>
  );
};

export default LoginForm;
