import React from "react";

import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import amazone from "../../../assets/brands/amazon.png"
import casio from "../../../assets/brands/casio.png"
import monster from "../../../assets/brands/moonstar.png"
import randstad from "../../../assets/brands/randstad.png"
import star from "../../../assets/brands/star.png"
import people from "../../../assets/brands/start_people.png"

const Brands = () => {
    const brands = [amazone, casio, monster, randstad, star, people]
    return (
        <div className="w-10/12 mx-auto mt-20">
            <h3 className="text-xl md:text-3xl text-secondary font-bold text-center mb-6">We have Helped thousands of sales teams</h3>
            <Swiper modules={[Autoplay]} autoplay={{ delay: 1000, disableOnInteraction: false }} slidesPerView={5} centeredSlides={true} loop={true} spaceBetween={30}>
                {brands.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <img src={logo} alt="" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Brands;
