import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const TestimonialCarousel = ({ children }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 600 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };
    return (
        <div className='testimonial-outr'>
            <Carousel
                responsive={responsive}
                showDots={false}
                ssr={true}
                dotListClass="custom-dot-list-style"
                itemClass="pe-5 align-self-start"
                arrows={true}
            >
                {children}
            </Carousel>
        </div>
    )
}

export default TestimonialCarousel
