import React, { useContext, useState, createContext } from "react";
import { ContextType, ProductType } from "@/types";

export const Context = createContext<ContextType | null>(null);

const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [pageLoader, setPageLoader] = useState(true);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<ProductType | null>(null);

  return (
    <Context.Provider
      value={{
        pageLoader,
        setPageLoader,
        product,
        setProduct,
        open,
        setOpen,
      }}
    >
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
