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
import Counter from "@/components/shared/counter.tsx";
import { addToCart } from "@/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { addSpaceToNumber } from "@/lib/utils";
import { GrFormNext } from "react-icons/gr";
import { TbShoppingBagCheck } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import infoBanner from "@/data/infoBanner.json";
import { addFavorite } from "@/redux/slices/favouritesSlice";
import { RootState } from "@/redux/store";

const ProductDetail = ({ params }: { params: { id: number } }) => {
  const [like, setLike] = useState(false);
  const [data, setData] = useState<ProductType>();
  const [count, setCount] = useState<number>(1);

  const dispatch = useDispatch();
  const { favorites } = useSelector((store: RootState) => store.favorites);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get(
        `https://dummyjson.com/products/${params.id}`
      );

      setData(data);
    };
    getData();
  }, [params.id]);

  useEffect(() => {
    const existProduct = favorites.find((item) => item.id === data?.id);
    if (existProduct) {
      setLike(true);
    } else {
      setLike(false);
    }
  }, [favorites]);

  const handleClick = (type: string) => {
    switch (type) {
      case "increment":
        setCount((prev) => (prev += 1));
        break;
      case "decrement":
        if (count > 1) {
          setCount((prev) => (prev -= 1));
        }
        break;
      case "addCart":
        dispatch(addToCart({ ...data, quantity: count }));
        break;
      case "addFavorites":
        dispatch(addFavorite(data));
        break;
    }
  };

  return (
    <div className="container mt-5">
      <div className=" grid grid-cols-12">
        <div className=" col-span-6 flex items-start justify-start gap-2">
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
                      objectFit="object-contain"
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
        <div className=" col-span-6">
          <div className=" flex items-center justify-between text-sm mb-5">
            <span className=" text-gray-400 flex items-center gap-2">
              <FaStar className=" text-[#F5A623] text-xs" />
              5.0 baho (11 baho)
            </span>
            <span
              onClick={() => handleClick("addFavorites")}
              className=" flex items-center gap-2 cursor-pointer"
            >
              <svg
                data-v-ff0a7354=""
                width="22"
                height="22"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ui-icon "
              >
                <path
                  d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                  fill={`${like ? "#8967F0" : "transparent"}`}
                  fill-opacity="0.8"
                ></path>
                <path
                  d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                  fill={`${like ? "#8967F0" : "#000000"}`}
                ></path>
              </svg>
              <span>Istaklar{like ? "da" : "ga"}</span>
            </span>
          </div>
          <div className=" flex flex-col gap-3 border-b border-b-gray-300 pb-5">
            <h1 className=" text-xl font-medium">{data?.description}</h1>
            <span className=" text-sm">
              Brend: <span className=" ml-5">{data?.brand}</span>
            </span>
            <span className="text-sm">
              Yetkazib berish:{" "}
              <span className=" ml-5 text-gray-500 font-light">
                1 kun, bepul
              </span>
            </span>
          </div>
          <div className=" mt-5">
            <span className=" text-sm">Miqdor:</span>
            <div className=" flex items-center gap-5 mt-3">
              {data && (
                <Counter
                  item={data}
                  handleClick={handleClick}
                  quantity={count}
                />
              )}
              <span className="text-[#009C38] text-sm">
                Sotuvda {data?.stock}ta mavjud
              </span>
            </div>
          </div>
          <div className=" mt-5">
            <span>Narx:</span>
            <div className=" flex items-center gap-4">
              <span className=" text-lg font-semibold">
                {data &&
                  addSpaceToNumber(
                    Math.floor((data.price * 12340) / 2) * count
                  )}{" "}
                so'm
              </span>
              <span className=" text-sm line-through text-gray-500 font-normal">
                {" "}
                {data &&
                  addSpaceToNumber(
                    Math.floor(data.price * 12340 + 10000) * count
                  )}{" "}
                so'm
              </span>
            </div>
          </div>
          <div className="mt-5 w-full bg-[#F1F3F6] py-3 cursor-pointer px-2 rounded-md flex items-center">
            <span className="bg-[#FFFF00] p-2 font-semibold rounded-md">
              Oyiga{" "}
              {data &&
                addSpaceToNumber(
                  Math.floor((data.price * 12340) / 12 / 2)
                )}{" "}
              so'mdan
            </span>
            <span className="ml-2 flex items-center justify-between">
              muddatli to'lov
            </span>
            <GrFormNext className=" ml-auto mr-4 text-lg" />
          </div>
          <div className=" mt-5 grid grid-cols-12 gap-2">
            <button
              onClick={() => handleClick("addCart")}
              className=" col-span-6 py-4 bg-[#6C00F5] rounded-xl font-semibold text-white"
            >
              Savatga Qo'shish
            </button>
            <button className=" col-span-6 py-4 border-2 border-[#6C00F5] font-semibold text-[#6c00f5] rounded-xl">
              Tugmani bir bosishda xarid qilish
            </button>
          </div>
          <div className=" mt-5 border border-gray-400 p-4 rounded-3xl">
            {infoBanner.map((item) => (
              <div className=" py-2 first:pb-2 first:pt-0 last:pb-0 last:pt-2 border-b border-b-gray-400 last:border-b-transparent flex flex-col">
                <span className=" text-md font-semibold">{item.title}</span>
                <span className=" text-sm text-gray-600">{item.subtitle}</span>
              </div>
            ))}
          </div>
          <div className=" mt-5 w-full bg-[#FFF8E6] rounded-lg flex items-center gap-3 text-md px-10 py-3">
            <TbShoppingBagCheck size={25} />
            <span>Bu haftada {data && data.stock * 2} kishi sotib oldi</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
