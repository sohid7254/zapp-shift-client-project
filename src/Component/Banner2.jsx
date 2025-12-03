import React from 'react';
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import deliveryman from "../assets/delivery_man.png"

const Banner2 = () => {
    return (
        <div className="flex flex-wrap items-center justify-between gap-8 bg-[#FFFFFF] px-6 py-10 md:px-10 rounded-2xl h-[550px]">
            {/* Left content */}
            <div className="flex-1 min-w-[280px] md:pr-6">
                <h1 className="text-2xl md:text-5xl font-bold leading-snug mb-5">
                    Fastest <br /> <span className="text-primary">Delivery</span> & Easy <br /> <span className="text-primary">Pickup</span>
                </h1>

                <p className="text-gray-600 text-base md:text-lg mb-7">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

                <div className="flex flex-wrap gap-3">
                    <div className="flex justify-center items-center">
                        <button className="inline-flex items-center rounded-3xl bg-primary px-5 py-2.5 text-black font-semibold hover:bg-[#c9f24d] transition">Track Your Parcel</button>
                        <BsArrowUpRightCircleFill className="w-9 h-9" />
                    </div>

                    <div>
                        <button className="inline-flex items-center rounded-md border-2 border-gray-300  px-5 py-2.5 font-semibold  transition">Be A Rider</button>
                    </div>
                </div>
            </div>

            {/* Right illustration */}
            <div className="flex-1 min-w-[280px] text-center">
                {/* Change the src to your actual image path */}
                <img src={deliveryman} alt="Delivery Rider" className="mx-auto max-w-full h-auto" />
            </div>
        </div>
    );
};

export default Banner2;