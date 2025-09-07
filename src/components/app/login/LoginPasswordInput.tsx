import { Input } from "@/components/ui/input";
import { Control, useController } from "react-hook-form";
import LoginPasswordHoverCard from "./LoginPasswordHoverCard";

type LoginPasswordInput = {
  control: Control<{ email: string; password: string; rememberMe: boolean }>;
};

const LoginPasswordInput = ({ control }: LoginPasswordInput) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name: "password", control });

  return (
    <>
      <div className="relative">
        <Input className="max-w-[280px] pr-10 " placeholder="password" type="password" {...field} />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <LoginPasswordHoverCard value={field.value} />
        </div>
      </div>
      {error ? (
        <p className="text-xs text-red-500 pt-1">{error.message}</p>
      ) : (
        <div className="h-4 pt-1"></div>
      )}
    </>
  );
};

export default LoginPasswordInput;
