"use client";
import { BorderBeam } from "@/components/ui/border-beam";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import UserPorfilPeriodCard from "../../user/PeriodCryptoCard";
const AppSidebarUserBalance = () => {
  return (
    <Card className="relative w-[200px] h-[200px] overflow-hidden">
      <CardContent>
        <div>
          <div>
            <p className="font-black text-">
              10 250.00 <span className="font-light">PLN</span>
            </p>
          </div>
          <div className="flex flex-col text-xs">
            <p className="text-foreground/50">Free funds</p>
            <p>
              102.00 <span className="font-light">PLN</span>
            </p>
          </div>
          <div className="flex flex-col text-xs pt-2">
            <p className="text-foreground/50">Profit</p>
            <p className="text-green-500 font-bold">
              +214.34 <span className="font-light">PLN</span>
            </p>
          </div>

          <div className="pt-2 space-x-1">
            <p className="text-foreground/50 text-xs pb-1">History</p>
            <UserPorfilPeriodCard periodWallet={10023} periodTime="1D" />
            <UserPorfilPeriodCard periodWallet={11125} periodTime="1W" />
            <UserPorfilPeriodCard periodWallet={14222} periodTime="1M" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
      <BorderBeam duration={8} size={100} />
    </Card>
  );
};

export default AppSidebarUserBalance;
