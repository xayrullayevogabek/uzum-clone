"use client";
import React, { useState, useEffect } from "react";
import categoryData from "@/data/category.json";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  const [slicer, setSlicer] = useState<number>(9);

  const sliceCategory = () => {
    if (window.innerWidth <= 1200) {
      setSlicer(8);
    }
    if (window.innerWidth <= 1024) {
      setSlicer(7);
    }
    if (window.innerWidth >= 1200) {
      setSlicer(9);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", sliceCategory);
  }, []);

  return (
    <div className="px-36 flex items-center justify-between max-[1300px]:px-5">
      <Link href={"#"} className="flex items-center text-sm font-semibold">
        <Image
          width={24}
          height={24}
          src="https://static.uzum.uz/nasiya/union.png"
          alt="mudatli to'lov"
          className="mr-2"
        />
        Muddatli to'lov
      </Link>
      {categoryData.slice(0, slicer).map((item) => (
        <div className="group mt-1">
          <Link href={item.href} className="text-sm text-gray-500 ">
            {item.translations.uz.title}
          </Link>
          <div className="group-hover:w-full cursor-pointer h-[1.3px] bg-black w-0 left-0 transition-all duration-500 mt-1"/>
        </div>
      ))}
      <button className="text-sm flex items-center">
        Yana
        <IoIosArrowDown className="ml-1" />
      </button>
    </div>
  );
};

export default Navigation;
