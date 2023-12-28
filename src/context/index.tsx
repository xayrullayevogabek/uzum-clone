import React, { useContext, useState, createContext } from "react";
import { ContextType } from "@/types";

export const Context = createContext<ContextType | null>(null);

const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [pageLoader, setPageLoader] = useState(true);
  return (
    <Context.Provider value={{ pageLoader, setPageLoader }}>
      {children}
    </Context.Provider>
  );
};

export default GlobalContext;

export const useGlobalContext = () => {
  const context = useContext(Context);
  if (context === null) {
    throw new Error("useGlobalContext must be used within a GlobalContext");
  }
  return context;
};
