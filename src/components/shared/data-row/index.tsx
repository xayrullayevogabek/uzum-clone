"use client";
import React from "react";
import { GroupedProductsType } from "@/types";
import { GrNext } from "react-icons/gr";
import DataCarousel from "../data-carousel";

interface Props {
  groupedProducts: GroupedProductsType[];
}

const DataRow = ({ groupedProducts }: Props) => {
  return (
    <div>
      {groupedProducts.map((item) => (
        <>
          <h1 className="capitalize text-3xl flex mt-10 items-center font-bold">
            {item.categoryName.split("-").join(" ")}
            <GrNext className={"text-2xl mt-1 ml-2"} />
          </h1>
          <DataCarousel products={item.data} />
          {item.image ? (
            <img
              className="w-full rounded-md mt-10 mb-10"
              src={item.image}
              alt=""
            />
          ) : null}
        </>
      ))}
    </div>
  );
};

export default DataRow;
