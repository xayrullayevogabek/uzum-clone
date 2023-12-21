"use client";
import React from "react";
import bannerData from "@/data/banner.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const Banner = () => {
  return (
    <div className=" py-5 relative h-full">
      <Swiper
        navigation={true}
        pagination={true}
        loop={true}
        modules={[Navigation, Pagination]}
        style={{ borderRadius: "15px" }}
        className="mySwiper h-full"
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
    </div>
  );
};

export default Banner;
