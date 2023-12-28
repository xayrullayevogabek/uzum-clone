"use client";
import React, { useEffect, useState } from "react";
import { ProductType, GroupedProductsType } from "@/types";
import axios from "axios";
import DataGrid from "../data-grid";
import DataRow from "../data-row";

const Common = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [sortedProducts, setSortedProducts] = useState<GroupedProductsType[]>(
    []
  );
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
                image: "",
                data: [product],
              };
            } else {
              acc[category].data.push(product);
            }
            return acc;
          }, {})
        );

        sortedProducts[0].image =
          "https://images.uzum.uz/cm1dc132psag1e8u5msg/main_page_banner.jpg";
        sortedProducts[2].image =
          "https://images.uzum.uz/cl88ertennt861ipbp7g/main_page_banner.jpg";
        sortedProducts[3].image =
          "https://images.uzum.uz/cm18funiraaukt5r7grg/main_page_banner.jpg";

        setSortedProducts(sortedProducts);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div className="mt-2">
      <DataGrid allProducts={products} />
      <DataRow groupedProducts={sortedProducts}/>
    </div>
  );
};

export default Common;
