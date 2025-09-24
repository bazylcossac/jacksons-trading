import { cn } from "@/lib/utils";
import { useMemo } from "react";

type UserPorfilPeriodCard = {
  openPrice: number | string;
  currentPrice: number | string;
  periodTime: string;
};

const UserPorfilPeriodCard = ({ openPrice, periodTime, currentPrice }: UserPorfilPeriodCard) => {
  if (!openPrice || !currentPrice) return;

  const periodAmount = useMemo(() => {
    const percent = ((Number(currentPrice) - Number(openPrice)) / Number(openPrice)) * 100;

    if (percent > 0) return `+${percent.toFixed(2)}`;
    return percent.toFixed(2).toString();
  }, [openPrice]);

  return (
    <div
      className={cn(
        "inline-block p-1 rounded-sm text-xs",
        String(periodAmount).startsWith("-") ? "bg-red-800/20" : "bg-green-800/70"
      )}
    >
      <p className="text-[10px] font-bold text-foreground/50">{periodTime}</p>
      <p
        className={cn(
          "inline-block rounded-xs text-xs text-[11px]",
          String(periodAmount).startsWith("-") ? "text-red-500" : "text-green-300"
        )}
      >
        {`${periodAmount}%`}
      </p>
    </div>
  );
};

export default UserPorfilPeriodCard;
