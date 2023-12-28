import React from "react";
import { ProductType } from "@/types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../card";

interface Props {
  products: ProductType[];
}

const DataCarousel = ({ products }: Props) => {
  const data = [...products, ...products];
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data.map((item: ProductType) => (
          <SwiperSlide>
            <Card product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default DataCarousel;
