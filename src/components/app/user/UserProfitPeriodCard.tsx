import { cn } from "@/lib/utils";
import { useMemo } from "react";

type UserPorfilPeriodCard = {
  periodWallet: number;
  periodTime: string;
};

const UserPorfilPeriodCard = ({ periodWallet, periodTime }: UserPorfilPeriodCard) => {
  const periodAmount = useMemo(() => {
    const percent = ((10250 - periodWallet) / 10250) * 100;
    if (percent > 0) return `+${percent.toFixed(2)}`;
    return percent.toFixed(2).toString();
  }, [periodWallet]);

  return (
    <div
      className={cn(
        "inline-block p-1 rounded-sm text-xs ",
        String(periodAmount).startsWith("-") ? "bg-red-800/20" : "bg-green-800/70"
      )}
    >
      <p className="text-[10px] font-bold">{periodTime}</p>
      <p
        className={cn(
          "inline-block rounded-xs text-xs text-[11px]",
          String(periodAmount).startsWith("-") ? "text-red-500" : "text-green-500"
        )}
      >
        {`${periodAmount}%`}
      </p>
    </div>
  );
};

export default UserPorfilPeriodCard;
