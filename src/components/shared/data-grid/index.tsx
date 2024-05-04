"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ProductType } from "@/types";
import { GrNext } from "react-icons/gr";
import Card from "../card";

interface Props {
  allProducts: ProductType[];
  title?: string;
}

const DataGrid = ({ allProducts, title }: Props) => {
  const [slicer, setSlicer] = useState<number>(20);
  const router = useRouter();

  const handleSliceData = () => {
    if (slicer < 40) {
      setSlicer((prev) => prev + 20);
    } else {
      router.push("/products");
    }
  };
  return (
    <div>
      {Boolean(title) ? (
        <h1 className=" text-xl font-semibold">{title}</h1>
      ) : (
        <h1 className="text-2xl flex items-center font-semibold">
          {"Katta Sotuvlar"} <GrNext className={"text-2xl mt-1 ml-2"} />{" "}
        </h1>
      )}

      <div className=" mt-2 grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 xl:grid-cols-5">
        {allProducts &&
          allProducts
            .slice(0, slicer)
            .map((item, indx) => <Card key={indx} product={item} />)}
      </div>
      <div className="w-full md:px-40 flex items-center justify-center py-5">
        {allProducts.length > 20 && (
          <button
            className="w-full rounded-md px-4 py-5 bg-[#F2F4F7] font-semibold"
            onClick={handleSliceData}
          >
            {slicer < 40 ? "Yana ko'rsatish 20" : "To'liq termani ko'rish "}
          </button>
        )}
      </div>
    </div>
  );
};

export default DataGrid;
