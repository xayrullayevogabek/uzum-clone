"use client";
import React from "react";
import { Client, HydrationProvider } from "react-hydration-provider";
import GlobalContext from "@/context";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <HydrationProvider>
      <GlobalContext>
        <Client>{children}</Client>
      </GlobalContext>
    </HydrationProvider>
  );
};

export default Provider;
