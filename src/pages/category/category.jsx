import React from "react";
import { useParams } from "react-router-dom";
import useGetSingleCategory from "./service/query/useGetSingleCategory";
import ProductCard from "../../components/card/product-card/product-card";

export const Category = () => {
  const { slug } = useParams()
  const { data, isLoading } = useGetSingleCategory(slug)
  console.log(data);
  return <div>
    {data?.map((item) => <ProductCard key={item.id} img={item.img} price={item.price} title={item.title} />)}
  </div>;
};
