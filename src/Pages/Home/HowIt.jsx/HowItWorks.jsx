import React from "react";
import deliveryVan from "../../../assets/bookingIcon.png"
const HowItWorks = () => {
    return (
        <section className=" py-12 max-w-11/12 mx-auto">
            <h2 className="text-3xl font-bold text-start mb-6">How it Works</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
                {/* Box 1 */}
                <div className="bg-gray-50 rounded-2xl p-6 shadow  transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
                    <img src={deliveryVan} alt="" />
                    <h3 className="text-lg text-secondary font-semibold mb-2">Booking Pick & Drop</h3>
                    <p className="text-sm text-gray-600">From personal packages to business shipments — we deliver on time, every time.</p>
                </div>

                {/* Box 2 */}
                <div className="bg-gray-50 rounded-2xl p-6  shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
                    <img src={deliveryVan} alt="" />
                    <h3 className="text-lg text-secondary font-semibold mb-2">Cash On Delivery</h3>
                    <p className="text-sm text-gray-600">From personal packages to business shipments — we deliver on time, every time.</p>
                </div>

                {/* Box 3 */}
                <div className="bg-gray-50 rounded-2xl p-6  shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
                    <img src={deliveryVan} alt="" />
                    <h3 className="text-lg text-secondary font-semibold mb-2">Delivery Hub</h3>
                    <p className="text-sm text-gray-600">From personal packages to business shipments — we deliver on time, every time.</p>
                </div>

                {/* Box 4 */}
                <div className="bg-gray-50 rounded-2xl p-6  shadow transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.02]">
                    <img src={deliveryVan} alt="" />
                    <h3 className="text-lg text-secondary font-semibold mb-2">Booking SME & Corporate</h3>
                    <p className="text-sm text-gray-600">From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
