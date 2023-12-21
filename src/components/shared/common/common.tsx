"use client";
import React, { useEffect } from "react";
import axios from "axios";

const Common = () => {
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://dummyjson.com/products?limit=100");
      console.log(res.data);
    };
    getData();
  }, []);

  return <div>Common</div>;
};

export default Common;
