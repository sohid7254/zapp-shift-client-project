import React, { use } from 'react';
import customerTop from "../../../assets/customer-top.png"
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ReviewsCard from './ReviewsCard';
const Reviews = ({reviewsPromise}) => {
    const reviews = use(reviewsPromise)
    
    return (
        <div className="my-20">
            <div className="flex flex-col justify-center items-center space-y-3 mb-10">
                <img src={customerTop} alt="customerTop" />
                <h2 className="text-4xl text-center font-bold text-secondary">What our customers are sayings</h2>
                <p className="text-sm text-center text-gray-400">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce <br /> pain, and strengthen your body with ease!
                </p>
            </div>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 30,
                    stretch: "50%",
                    depth: 200,
                    modifier: 0.75,
                    
                    slideShadows: true,
                }}
                loop={true}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper"
            >
                {reviews.map((review) => (
                    <SwiperSlide key={review.id}>
                        <ReviewsCard reviews={review}></ReviewsCard>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Reviews;