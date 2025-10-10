"use client";
import { type Register, RegisterSchema } from "@/@types/app/register";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { signUp } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SpinnerCircularFixed } from "spinners-react";
import PasswordInput from "../PasswordInput";

const RegisterForm = () => {
  const [showLoading, setShowLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { email: "", password: "", name: "" },
  });

  const submitAction = async (userData: Register) => {
    await signUp.email(
      {
        email: userData.email,
        password: userData.password,
        name: userData.name,
        callbackURL: "/dashboard",
      },
      {
        onSuccess: () => {
          setShowLoading(false);
        },
        onRequest: () => setShowLoading(true),
        onError: (error) => {
          toast.error(error.error.message);
          setShowLoading(false);
        },
      }
    );
  };

  return (
    <div className="md:w-1/2 flex flex-col text-center items-center justify-center md:pt-0 pt-10">
      <div className="pb-4 space-y-2">
        <h2 className="text-3xl">Sign Up</h2>
        <p>Join modern trading platform now.</p>
      </div>
      <form
        className="flex flex-col items-center justify-center gap-2 "
        onSubmit={handleSubmit(submitAction)}
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

        <Input className="max-w-[280px]" placeholder="John Doe" type="text" {...register("name")} />
        {errors.name ? (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        ) : (
          <div className="h-4"></div>
        )}
        <div className="flex flex-col w-[280px] items-stretch">
          <PasswordInput control={control} />
        </div>
        <Button variant="secondary" className="cursor-pointer" type="submit">
          {showLoading ? (
            <SpinnerCircularFixed
              size={50}
              thickness={180}
              speed={100}
              color="rgba(255, 255, 255, 1)"
              secondaryColor="rgba(0, 0, 0, 0.44)"
            />
          ) : (
            "Sign up"
          )}
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
