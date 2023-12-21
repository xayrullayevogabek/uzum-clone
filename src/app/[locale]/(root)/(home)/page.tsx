"use client"
import React from "react";
import Banner from "@/components/shared/banner/banner";
import Common from "@/components/shared/common/common";

const Home = () => {
  return (
    <div className="px-36 max-[1300px]:px-5">
      <Banner />
      <Common />
    </div>
  );
};

export default Home;
