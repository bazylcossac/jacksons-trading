"use client";
import CorePopover from "@/components/CoreComponents/popover";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";

const AppHeaderUser = () => {
  const { data } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    redirect("/login");
  };

  return (
    <CorePopover
      className="max-w-50 mt-2 mr-2"
      trigger={
        data?.user.image ? (
          <Image
            width={100}
            height={100}
            alt="user image"
            src={data.user.image}
            className="size-10 rounded-md cursor-pointer hover:brightness-90"
          />
        ) : (
          <Skeleton className="size-10 rounded-md" />
        )
      }
    >
      <Button variant="destructive" className="w-full hover:brightness-90" onClick={handleLogout}>
        Logout
      </Button>
    </CorePopover>
  );
};

export default AppHeaderUser;
