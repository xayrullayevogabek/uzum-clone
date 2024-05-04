"use client";
import Card from "@/components/shared/card";
import CustomImage from "@/components/shared/custom-image";
import Empty from "@/components/shared/empty";
import { RootState } from "@/redux/store";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const Page = () => {
  const { favorites } = useSelector((store: RootState) => store.favorites);
  return (
    <div className=" container">
      {favorites.length > 0 ? (
        <>
          <div className=" border-b border-b-gray-200">
            <h1 className=" text-2xl py-5">Istaklarim</h1>
          </div>
          <div className=" mt-2 grid grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4 xl:grid-cols-5">
            {favorites.map((item, index) => (
              <Card key={index} product={item} />
            ))}
          </div>
        </>
      ) : (
        // <div className=" flex flex-col items-center gap-5 mt-20">
        //   <div className=" relative w-56 h-56">
        //     <CustomImage image="" />
        //   </div>
        //   <h1 className="text-xl"></h1>
        //   <span className=" text-sm">
        //     Bosh sahifaga oʻting va mahsulotdagi ♡ belgisini bosing
        //   </span>
        //   <Link href={"/"}>
        //     <button className=" py-3 px-10 cursor-pointer bg-[#7000FF] text-white rounded-sm ">
        //       Bosh sahifa
        //     </button>
        //   </Link>
        // </div>
        <Empty
          title="Sizga yoqqanini qoʻshing"
          subTitle="Bosh sahifaga oʻting va mahsulotdagi ♡ belgisini bosing"
          image="/images/empty-favorites.png"
        />
      )}
    </div>
  );
};

export default Page;
