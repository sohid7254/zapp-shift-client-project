import React from 'react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Banner1 from '../../../Component/Banner1';
import Banner2 from '../../../Component/Banner2';
import Banner3 from '../../../Component/Banner3';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <Swiper modules={[Autoplay, Pagination]} spaceBetween={30} slidesPerView={1} loop={true} autoplay={{ delay: 3000 }}  pagination={{ clickable: true }} className='mt-5 md:px-4'>
            <SwiperSlide>
                <Banner1 />
            </SwiperSlide>
            <SwiperSlide>
                <Banner2 />
            </SwiperSlide>
            <SwiperSlide>
                <Banner3 />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;