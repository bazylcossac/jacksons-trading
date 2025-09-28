import { testHonoType } from "@/components/app/api/[[...route]]/route";
import { hc } from "hono/client";

const honoClient = hc<testHonoType>("http://localhost:3000/");
