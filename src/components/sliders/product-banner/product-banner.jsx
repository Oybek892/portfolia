import React from 'react'
import Slider from 'react-slick';


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "38px" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                left: "38px",
                zIndex: "49",
            }}
            onClick={onClick}
        />
    );
}

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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
            }
        }
    ]

};
const ProductBanner = ({ children }) => {
    return <Slider {...settings}>
        {children}
    </Slider>
}

export default ProductBanner
