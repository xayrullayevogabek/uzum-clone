import React, { useState } from "react";
import { ProductType } from "@/types";
import Image from "next/image";
interface Props {
  image: string;
  objectFit?:string
}

const CustomImage = ({ image, objectFit = "object-contain" }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Image
      src={image}
      alt={"product-image"}
      fill
      className={` ${objectFit} group-hover:scale-105 absolute duration-500 ease-in-out ${
        isLoading
          ? "scale-110 blur-2xl grayscale"
          : "scale-100 blur-0 grayscale-0"
      }}`}
      onLoadingComplete={() => setIsLoading(false)}
    />
  );
};

export default CustomImage;
