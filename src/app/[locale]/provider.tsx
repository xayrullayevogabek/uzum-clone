"use client";
import React from "react";
import { Client, HydrationProvider } from "react-hydration-provider";
import GlobalContext from "@/context";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <HydrationProvider>
        <GlobalContext>
          <Client>{children}</Client>
        </GlobalContext>
      </HydrationProvider>
    </Provider>
  );
};

export default Providers;
