import React from "react";
import CustomImage from "../custom-image";
import Link from "next/link";

interface Props {
  title: string;
  subTitle: string;
  image: string;
  btn?: boolean;
}

const Empty = ({ title, subTitle, image, btn = true }: Props) => {
  return (
    <div className=" flex flex-col items-center gap-5 mt-20">
      <div className=" relative w-56 h-56">
        <CustomImage image={image} />
      </div>
      <h1 className="text-xl">{title}</h1>
      <span className=" text-sm">{subTitle}</span>
      {!btn ? (
        ""
      ) : (
        <Link href={"/"}>
          <button className=" py-3 px-10 cursor-pointer bg-[#7000FF] text-white rounded-sm ">
            Bosh sahifa
          </button>
        </Link>
      )}
    </div>
  );
};

export default Empty;
