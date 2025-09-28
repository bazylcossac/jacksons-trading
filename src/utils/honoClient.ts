import { AppType } from "@/app/api/[[...route]]/route";
import { hc } from "hono/client";

const honoClient = hc<AppType>("http://:3000/");
