"use client";

import loadInitData from "@/utils/loadInitData";
import { PropsWithChildren, useEffect } from "react";

const AppInit = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    loadInitData();
  }, []);

  return children;
};

export default AppInit;
