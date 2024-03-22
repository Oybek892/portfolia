import React from "react";
import Slider from "react-slick";
import { useGetBanner2 } from "../../service/query/useGetBanners2";


const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 5.5,
    autoplay: true,
    slidesToScroll: 1,


    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
            }
        },
        {
            breakpoint: 376,
            settings: {
                slidesToShow: 2.5,
                slidesToScroll: 1,
                dots: true
            }
        }
    ]

};

export const SliderBanner = () => {
    const { data, isLoading } = useGetBanner2();

    return (
        <Slider className="pt-5"  {...settings}>
            {data?.map((item) => (
                <div className="container gap-5" key={item.id}>
                    <div className="flex items-center w-32 gap-1 p-1 rounded-sm bg-slate-100">
                        <img className="h-12 text-xs " src={item.img} alt="img" />
                        <p className="text-xs w-[72px] font-medium text-center">{item.text}</p>

                    </div>
                </div>
            ))}
        </Slider>
    );
};
