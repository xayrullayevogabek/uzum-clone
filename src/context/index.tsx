import React, { useContext, useState, createContext } from "react";
import { ContextType, ProductType } from "@/types";

export const Context = createContext<ContextType | null>(null);

const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [pageLoader, setPageLoader] = useState(true);
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<ProductType | null>(null);

  const addSpaceToNumber = (num: number): string => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <Context.Provider
      value={{
        pageLoader,
        setPageLoader,
        product,
        setProduct,
        open,
        setOpen,
        addSpaceToNumber,
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
