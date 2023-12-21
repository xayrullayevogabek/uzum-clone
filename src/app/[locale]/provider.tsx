'use client'
import React from "react";
import { Client, HydrationProvider } from "react-hydration-provider";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <HydrationProvider>
      <Client>{children}</Client>
    </HydrationProvider>
  );
};

export default Provider;
