"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import { ProductType } from "@/types";
import DataGrid from "@/components/shared/data-grid";
import { capitalizeWords } from "@/lib/utils";
import Empty from "@/components/shared/empty";

const Page = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const params = useParams();

  useEffect(() => {
    const getSearchedData = async () => {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/search?q=${params.query}`
        );
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      }
    };
    getSearchedData();
  }, [params.query]);

  return (
    <div className="container py-10">
      {products.length > 0 ? (
        <DataGrid
          allProducts={products}
          title={`${capitalizeWords(
            decodeURI(params.query as string)
          )}'ga tegishli mahsulotlar`}
        />
      ) : (
        <Empty
          title="Biz siz qidirayotgan narsani topa olmadik"
          subTitle="Mahsulot nomida xatolik yoki bizda hali bunday mahsulot boʻlmasligi mumkin"
          image="/images/empty-search.png"
          btn={false}
        />
      )}
    </div>
  );
};

export default Page;
