import React from "react";
import { Search } from "./components/search/search";
import { Buttons } from "./components/buttons/buttons";
import logo from "../../assets/imgs/logo.svg";
import { Modal } from "../../components/ui/modal/modal";
import { useModal } from "../../hooks/useModal";
import { Link } from "react-router-dom";
import { useGetCatalog } from "./service/query/useGetCatalog";
import Skeleton from "react-loading-skeleton";
import call from "../../assets/imgs/call.svg"
import catalog from "../../assets/imgs/katalog.svg"


export const Header = () => {
  const { close, isOpen, open } = useModal();
  const { data, isLoading } = useGetCatalog();
  return (
    <div className="container">
      <div className="flex gap-[24px] py-2 justify-end">
        <a href="#">Доставка и оплата</a>
        <a href="#">Пункты выдачи</a>
        <a href="#">Поддержка</a>
        <a className="flex items-center gap-2" href="#"> <img src={call} alt="" /> +998 90 253 77 53</a>
      </div>
      <div className="flex justify-between items-center py-[17px]">
        <div className="flex gap-5">
          <Modal close={close} isOpen={isOpen}>
            <Link className="text-red-600" to="/category/123">
              Category
            </Link>
            {isLoading ? (
              <Skeleton count={7} height={50} />
            ) : (
              <div className="grid grid-cols-3 gap-5">
                {data?.map((item) => (
                  <Link to={`/category/${item.name}`} key={item.id}>
                    <img src={item.img} alt="img" />
                    <p>{item.text}</p>
                  </Link>
                ))}
              </div>
            )}
          </Modal>
          <a href="#">
            <img src={logo} alt="img" />
          </a>
          <button onClick={open} className="flex items-center gap-2 px-5 bg-yellow-400 rounded">
            <img src={catalog} alt="" />
            Каталог
          </button>
        </div>
        <Search />
        <Buttons />
      </div>
    </div>
  );
};
