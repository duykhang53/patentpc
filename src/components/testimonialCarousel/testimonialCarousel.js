import React from 'react'
import Slider from "react-slick";
import "../../react-slick/css/slick.scss";
import "../../react-slick/css/theme.scss";

const TestimonialCarousel = ({ children }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
    };
    return (
        <div className='testimonial-outr'>
            <Slider
                {...settings}
            >
                {children}
            </Slider >
        </div>
    )
}

export default TestimonialCarousel
