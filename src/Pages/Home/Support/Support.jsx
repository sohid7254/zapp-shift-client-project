import React from 'react';
import percelTraking from "../../../assets/live-tracking.png";
import deliveryMan from "../../../assets/safe-delivery.png";
const Support = () => {
    return (
        <section className=" py-12 border-t-2 border-b-2 border-dashed border-secondary w-10/12 mx-auto flex flex-col gap-10 my-20">
            <div className="flex flex-col md:flex-row items-center bg-white p-8 gap-10 rounded-2xl">
                <div className="flex flex-col md:flex-row items-center gap-10 flex-1">
                    <img src={percelTraking} alt="Live Parcel Tracking" className="max-w-[280px] relative h-auto" />
                    <div className="w-full md:w-0.5 h-0.5 md:h-[200px] border-t-2 md:border-t-0 md:border-l-2 border-dashed border-secondary"></div>
                </div>
                <div className="">
                    <h2 className="text-3xl font-bold mb-4">Live Parcel Tracking</h2>
                    <p className="text-gray-700 text-base">Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-white p-8 gap-10 rounded-2xl">
                <div className="flex flex-col md:flex-row items-center gap-10 flex-1">
                    <img src={deliveryMan} alt="Live Parcel Tracking" className="max-w-[280px] relative h-auto" />
                    <div className="w-full md:w-0.5 h-0.5 md:h-[200px] border-t-2 md:border-t-0 md:border-l-2 border-dashed border-secondary"></div>
                </div>
                <div className="">
                    <h2 className="text-3xl text-secondary font-bold mb-4">100% Safe Delivery</h2>
                    <p className="text-gray-700 text-base">We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-white p-8 gap-10 rounded-2xl">
                <div className="flex flex-col md:flex-row items-center gap-10 flex-1">
                    <img src={deliveryMan} alt="Live Parcel Tracking" className="max-w-[280px] relative h-auto" />
                    <div className="w-full md:w-0.5 h-0.5 md:h-[200px] border-t-2 md:border-t-0 md:border-l-2 border-dashed border-secondary"></div>
                </div>
                <div className="">
                    <h2 className="text-3xl font-bold mb-4">24/7 Call Center Support</h2>
                    <p className="text-gray-700 text-base">Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                </div>
            </div>
        </section>
    );
};

export default Support;