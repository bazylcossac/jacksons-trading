import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";
import { BsFillInfoSquareFill } from "react-icons/bs";

type PasswordHoverCard = {
  value: string;
};

const PasswordHoverCard = ({ value }: PasswordHoverCard) => {
  const fiveCharactes = /^.{8,}$/.test(value);
  const oneSpecialCharacter = /^(?=.*[!@#$%^&*])/.test(value);
  const oneUppercaseCharacter = /[A-Z]/.test(value);

  return (
    <HoverCard>
      <HoverCardTrigger className="cursor-pointer">
        <BsFillInfoSquareFill />
      </HoverCardTrigger>
      <HoverCardContent>
        <p className={cn("text-xs", fiveCharactes ? "text-green-500" : "text-red-500")}>
          At least 8 characters
        </p>
        <p className={cn("text-xs", oneUppercaseCharacter ? "text-green-500" : "text-red-500")}>
          At least 1 uppercase character
        </p>
        <p className={cn("text-xs", oneSpecialCharacter ? "text-green-500" : "text-red-500")}>
          At least 1 special character
        </p>
      </HoverCardContent>
    </HoverCard>
  );
};
export default PasswordHoverCard;
