import React, { useState } from "react";
import { ProductType } from "@/types";
import Image from "next/image";
interface Props {
  product: ProductType;
}

const CustomImage = ({ product }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      src={product.thumbnail}
      alt={product.title}
      fill
      className={`object-contain group-hover:scale-105 absolute duration-500 ease-in-out ${
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }}`}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};

export default CustomImage;
