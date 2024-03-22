import React from "react";
import { Banner } from "./components/banner/banner";
import { SliderBanner } from "./components/banner/slider-banner";
import useGetnewProducts from "./service/query/useGetnewProducts";
import ProductBanner from "../../components/sliders/product-banner/product-banner";
import ProductCard from "../../components/card/product-card/product-card";
import aksia1 from "../../assets/imgs/aksia1.svg"


export const Home = () => {
  const { data, isLoading } = useGetnewProducts("phones")
  const { data: data2, isLoading: isLoading2 } = useGetnewProducts("notebook")
  return (
    <div>
      <Banner />
      <div className="container">
        <SliderBanner />
      </div>
      <section>
        <div className="container pt-10">
          <h2 className="pb-4 text-xl font-semibold">Смартфоны и планшеты</h2>
          <ProductBanner>
            {data?.map(((item) => <ProductCard key={item.id} {...item} />))}
          </ProductBanner>
        </div>
      </section>
      <section>
        <div className="bg-blue-300">
          <div className="container py-10">
            <div>
              <p className="pb-20 text-xl font-semibold">Акции</p>
            </div>
            <div className="flex">
              <img className="w-[107px]" src={aksia1} alt="img" />
              <img className="w-[107px]" src={aksia1} alt="img" />
              <img className="w-[107px]" src={aksia1} alt="img" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div>
            <h2 className="pb-4 text-xl font-semibold ">Смартфоны и планшеты</h2>
            <ProductBanner>
              {data?.map(((item) => <ProductCard key={item.id} {...item} />))}
            </ProductBanner>
          </div>
          <h2 className="pb-4 text-xl font-semibold ">Ноутбуки, планшеты и компьютеры</h2>
          <ProductBanner>
            {data2?.map(((item) => <ProductCard key={item.id} {...item} />))}
          </ProductBanner>
        </div>
      </section>
    </div>
  );
};
