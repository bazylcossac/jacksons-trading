// TODO add loading state to suspense
import RouteGrid from "@/components/app/dashboard/RouteGrid/RougteGrid";
import { Suspense } from "react";

export const experimental_ppr = true;

const DashboardPage = async () => {
  return (
    <div className="grid grid-cols-3 space-x-2 px-2 py-2">
      <RouteGrid />
      <Suspense fallback={<p>loading...</p>}>
        <div>client page</div>
      </Suspense>
    </div>
  );
};

export default DashboardPage;
