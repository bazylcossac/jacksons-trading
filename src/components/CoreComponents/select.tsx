import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type CoreSelectProps = {
  trigger?: ReactNode;
  className?: string;
  triggerClassName?: string;
};

const CoreSelect = ({ className, triggerClassName }: CoreSelectProps) => {
  return (
    <Select>
      <SelectTrigger className={cn("w-[180px]", triggerClassName)}>
        <SelectValue placeholder="Fav Crypto ⭐" />
      </SelectTrigger>
      <SelectContent className={cn("bg-background", className)}>
        <SelectItem value="btcusd">BTC</SelectItem>
        <SelectItem value="ethusd">ETH</SelectItem>
        <SelectItem value="usdtusd">USDT</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CoreSelect;
