"use client";
import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { GrFormNext } from "react-icons/gr";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useGlobalContext } from "@/context";
import CustomImage from "../custom-image";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { addToCart } from "@/redux/slices/cartSlice";
import { addSpaceToNumber } from "@/lib/utils";
import Counter from "../counter.tsx";
import { ProductType } from "@/types";

const ProductDialog = () => {
  const { open, setOpen, product } = useGlobalContext();
  const [count, setCount] = useState<number>(1);
  const [imageIndx, setImageIndx] = useState<number>(0);
  const dispatch = useDispatch();

  const handleOpenChange = () => {
    setOpen(false);
    setCount(1);
    setImageIndx(0);
  };

  const handleClick = (type: string) => {
    switch (type) {
      case "increment":
        setCount((prev) => (prev += 1));
        break;
      case "decriment":
        if (count > 1) {
          setCount((prev) => (prev -= 1));
        }
        break;
      case "addCart":
        dispatch(addToCart({ ...product, quantity: count }));
        break;
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className=" max-w-4xl px-8">
        <div className="w-full grid grid-cols-3 gap-5">
          <div className="w-full flex-col flex items-center justify-start">
            <div className="w-full h-96 bg-[#EFEFEF] rounded-md relative">
              <CustomImage
                image={
                  imageIndx !== null
                    ? (product?.images[imageIndx] as string)
                    : (product?.thumbnail as string)
                }
              />
            </div>
            <button className="p-2 mt-2 font-medium text-[14px] border border-gray-500 w-full rounded-md">
              Maxsulot haqidagi bor ma'lumot
            </button>
          </div>
          <div className="col-span-2">
            <h1 className="text-xl font-semibold line-clamp-2">
              {product?.title}
            </h1>
            <hr className="mt-5 bg-gray-700" />
            <div className="w-full mt-2">
              <span>Rangni tanlang:</span>
              <div className="flex items-start mt-2 w-full">
                {product?.images.map((item, indx) => (
                  <div
                    key={indx}
                    onClick={() => setImageIndx(indx)}
                    className={`relative cursor-pointer w-16 h-20 p-2 mr-2 border-2 rounded-md ${
                      imageIndx === indx ? "border-gray-900" : "border-gray-300"
                    } `}
                  >
                    <CustomImage image={item} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-2">
              <span>Miqdor:</span>
              <div className="flex items-center mt-2">
                <Counter
                  item={product as ProductType}
                  handleClick={handleClick}
                  quantity={count}
                />
                <span className=" text-green-500 text-sm font-light">
                  Sotuvda {product?.stock} dona bor
                </span>
              </div>
            </div>
            <div className="mt-3">
              <span className="text-lg font-semibold flex items-center">
                {addSpaceToNumber(
                  Math.floor(((product?.price as number) * 12340) / 2) * count
                )}
                so'm
                <span className="ml-5 line-through text-sm text-gray-400 font-normal">
                  {addSpaceToNumber(
                    Math.floor((product?.price as number) * 12340 + 100000 / 2)
                  )}{" "}
                  so'm
                </span>
                <div className="px-1 ml-2 capitalize text-sm rounded-sm bg-[#5000AA] text-white">
                  {product?.category.split("-").join(" ")}
                </div>
              </span>
              <div className="mt-2 w-full bg-[#F1F3F6] py-3 cursor-pointer px-2 rounded-md flex items-center">
                <span className="bg-[#FFFF00] p-2 font-semibold rounded-md">
                  Oyiga{" "}
                  {addSpaceToNumber(
                    Math.floor(((product?.price as number) * 12340) / 12 / 2)
                  )}{" "}
                  so'mdan
                </span>
                <span className="ml-2 flex items-center justify-between">
                  muddatli to'lov
                </span>
                <GrFormNext className=" ml-auto mr-4 text-lg" />
              </div>
              <button
                name="addCart"
                onClick={() => {
                  handleOpenChange();
                  handleClick("addCart");
                }}
                className="w-full p-4 mt-3 rounded-lg text-white font-semibold bg-[#7000FF]"
              >
                Savatga Qo'shish
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDialog;
