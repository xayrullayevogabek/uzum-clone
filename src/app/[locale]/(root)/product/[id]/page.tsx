"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ProductType } from "@/types";
import CustomImage from "@/components/shared/custom-image";

const ProductDetail = ({ params }: { params: { id: number } }) => {
  const [data, setData] = useState<ProductType>();
  
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://dummyjson.com/products/${params.id}`
      );

      setData(data);
    };
    getData();
  }, [params.id]);

  return (
    <div className="px-36 max-[1300px]:px-5 mt-5">
      <div className="flex items-start justify-start gap-2">
        <div className=" overflow-y-scroll w-24 h-[65vh]  no-scrollbar">
          {data?.images.map((item, indx) => (
            <div
              key={indx}
              className={`relative border-gray-300  rounded-sm border w-full cursor-pointer h-28 mt-1`}
            >
              <CustomImage image={item} />
            </div>
          ))}
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-md"
        >
          <CarouselContent>
            {data?.images.map((item, indx) => (
              <CarouselItem key={indx}>
                <div className="p-1 relative h-[65vh] w-full rounded-sm">
                  <CustomImage
                    image={item}
                    objectFit="object-cover"
                    className="rounded-sm"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" absolute top-1/2 left-5 bg-[#BFBFBF] hover:bg-[#969696] border-none" />
          <CarouselNext className=" absolute top-1/2 right-5 bg-[#BFBFBF] hover:bg-[#969696] border-none" />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductDetail;
