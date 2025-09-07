import { Input } from "@/components/ui/input";
import { Control, FieldValues, Path, useController } from "react-hook-form";
import PasswordHoverCard from "./PasswordHoverCard";

type PasswordInput<T extends FieldValues> = {
  control: Control<T>;
};

const PasswordInput = <T extends FieldValues>({ control }: PasswordInput<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name: "password" as Path<T>, control });

  return (
    <>
      <div className="relative">
        <Input className="max-w-[280px] pr-10 " placeholder="password" type="password" {...field} />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <PasswordHoverCard value={field.value} />
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

export default PasswordInput;
