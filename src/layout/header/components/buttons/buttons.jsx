import React from "react";
import akaunt from "../../../../assets/imgs/akaunt.svg"
import korzinka from "../../../../assets/imgs/korzinka.svg"
import yural from "../../../../assets/imgs/yurak.svg"
export const Buttons = () => {
  return <div className="flex items-center gap-20">
    <div className="">
      <a href="#">
        <div>
          <img src={akaunt} alt="img" />
        </div>
        <div>
          <p className="flex ml-[-10px]">Войти</p>
        </div>
      </a>
    </div>
    <div>
      <a href="#">
        <div>
          <img src={yural} alt="img" />
        </div>
        <div><p className="flex ml-[-25px]">Избранное</p></div>
      </a>
    </div>
    <div>
      <a href="#"><div><img src={korzinka} alt="img" /></div><div><p className="flex ml-[-20px]">Корзина</p></div></a>
    </div>
  </div>;
};
