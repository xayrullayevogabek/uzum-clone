"use client";
import { ProductType } from "@/types";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DataCarousel from "../data-carousel";
import { GrNext } from "react-icons/gr";

const RelatedProducts = () => {
  const [data, setData] = useState<ProductType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/products");
        setData(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  console.log(data);

  return (
    <div className=" py-20">
      <h1 className="text-2xl flex items-center font-semibold">Related Products <GrNext className={"text-2xl mt-1 ml-2"}/></h1>
      <div>
        <DataCarousel products={data && data} />
      </div>
    </div>
  );
};

export default RelatedProducts;
