"use client";
import React, { useEffect, useState } from "react";
import Banner from "@/components/shared/banner/banner";
import Common from "@/components/shared/common/common";
import { ProductType, GroupedProductsType } from "@/types";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [sortedProducts,setSortedProducts] = useState<GroupedProductsType[]>([])
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );

        setProducts(data.products);

        const sortedProducts: GroupedProductsType[] = Object.values(
          data.products.reduce((acc: any, product: ProductType) => {
            const category = product.category;
            if (!acc[category]) {
              acc[category] = {
                categoryName: category,
                data: [product],
              };
            } else {
              acc[category].data.push(product);
            }
            return acc;
          }, {})
        );

        setSortedProducts(sortedProducts);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);


  return (
    <div className="px-36 max-[1300px]:px-5">
      <Banner />
      <Common />
    </div>
  );
};

export default Home;
