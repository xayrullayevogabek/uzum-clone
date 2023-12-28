"use client";
import React, { useRef } from "react";
import bannerData from "@/data/banner.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Banner = () => {
  const swiperRef = useRef<any>(null);

  return (
    <div className=" py-5 relative h-full">
      <Swiper
        navigation={true}
        pagination={true}
        loop={true}
        modules={[Pagination]}
        style={{ borderRadius: "15px" }}
        className="mySwiper h-[25vh] md:h-[60vh] w-full"
        onSlideChange={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {bannerData.map((item) => (
          <SwiperSlide className=" w-full h-full">
            <img
              src={item.image}
              alt="banner-image"
              className="w-full h-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        onClick={() => swiperRef.current.slideNext()}
        className=" absolute right-5 top-[45%] bg-slate-200/70 rounded-full p-2 z-20 "
      >
        <svg
          data-v-d2407ce0=""
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#1f2026"
          xmlns="http://www.w3.org/2000/svg"
          className="ui-icon "
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.18945 20.4983C7.91426 20.1887 7.94215 19.7146 8.25174 19.4394L16.1211 12L8.25173 4.56055C7.94215 4.28536 7.91426 3.81131 8.18945 3.50172C8.46464 3.19213 8.93869 3.16425 9.24828 3.43944L17.7483 11.4394C17.9084 11.5818 18 11.7858 18 12C18 12.2142 17.9084 12.4182 17.7483 12.5605L9.24828 20.5605C8.93869 20.8357 8.46464 20.8079 8.18945 20.4983Z"
            fill="black"
          ></path>
        </svg>
      </button>
      <button
        onClick={() => swiperRef.current.slidePrev()}
        className=" absolute left-5 top-[45%] bg-slate-200/70 rounded-full p-2 z-20"
      >
        <svg
          data-v-d2407ce0=""
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#1f2026"
          xmlns="http://www.w3.org/2000/svg"
          className="ui-icon "
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.8106 20.4983C16.0857 20.1887 16.0579 19.7146 15.7483 19.4394L7.8789 12L15.7483 4.56055C16.0579 4.28536 16.0857 3.81131 15.8106 3.50172C15.5354 3.19213 15.0613 3.16425 14.7517 3.43944L6.25173 11.4394C6.09161 11.5818 6 11.7858 6 12C6 12.2142 6.09161 12.4182 6.25173 12.5605L14.7517 20.5605C15.0613 20.8357 15.5354 20.8079 15.8106 20.4983Z"
            fill="black"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default Banner;
