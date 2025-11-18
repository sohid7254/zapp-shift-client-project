import React from 'react';
import service from "../../../assets/service.png"
const Services = () => {
    return (
        <div className="rounded-2xl bg-secondary mb-10">
            <div className="py-13 space-y-7">
                <div className="text-center text-white">
                    <h3 className="  text-3xl font-bold">Our Services</h3>
                    <p className="text-gray-300 text-sm mt-3">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-11/12 mx-auto">
                    {/* Card 1 */}
                    <div className="bg-[#FFFFFF] rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] flex flex-col justify-center items-center space-y-2">
                        <img src={service} alt="" className="bg-linear-to-b from-[#EEEDFC] to-[#fffdfd] p-4 rounded-full w-20 h-20 " />
                        <h3 className="text-2xl font-semibold mb-2 text-secondary text-center">
                            Express & Standard <br />
                            Delivery
                        </h3>
                        <p className="text-sm text-gray-500 text-center">We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-primary rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] flex flex-col justify-center items-center space-y-2">
                        <img src={service} alt="" className="bg-linear-to-b from-[#EEEDFC] to-[#c0f122] p-4 rounded-full w-20 h-20 " />
                        <h3 className="text-2xl font-semibold mb-2 text-secondary text-center">Nationwide Delivery</h3>
                        <p className="text-sm text-gray-500 text-center">We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.</p>
                    </div>
                    {/* Card 3 */}
                    <div className="bg-[#FFFFFF] rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] flex flex-col justify-center items-center space-y-2">
                        <img src={service} alt="" className="bg-linear-to-b from-[#EEEDFC] to-[#fffdfd] p-4 rounded-full w-20 h-20 " />
                        <h3 className="text-2xl font-semibold mb-2 text-secondary text-center">Fulfillment Solution</h3>
                        <p className="text-sm text-gray-500 text-center">We also offer customized service with inventory management support, online order processing, packaging, and after sales support.</p>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-[#FFFFFF] rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] flex flex-col justify-center items-center space-y-2">
                        <img src={service} alt="" className="bg-linear-to-b from-[#EEEDFC] to-[#fffdfd] p-4 rounded-full w-20 h-20 " />
                        <h3 className="text-2xl font-semibold mb-2 text-secondary text-center">Cash on Home Delivery</h3>
                        <p className="text-sm text-gray-500 text-center">100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.</p>
                    </div>
                    {/* Card 5 */}
                    <div className="bg-[#FFFFFF] rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] flex flex-col justify-center items-center space-y-2">
                        <img src={service} alt="" className="bg-linear-to-b from-[#EEEDFC] to-[#fffdfd] p-4 rounded-full w-20 h-20 " />
                        <h3 className="text-2xl font-semibold mb-2 text-secondary text-center">Corporate Service / Contract In Logistics</h3>
                        <p className="text-sm text-gray-500 text-center">Customized corporate services which includes warehouse and inventory management support.</p>
                    </div>
                    {/* Card 6 */}
                    <div className="bg-[#FFFFFF] rounded-xl p-6 shadow hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] flex flex-col justify-center items-center space-y-2">
                        <img src={service} alt="" className="bg-linear-to-b from-[#EEEDFC] to-[#fffdfd] p-4 rounded-full w-20 h-20 " />
                        <h3 className="text-2xl font-semibold mb-2 text-secondary text-center">Parcel Return</h3>
                        <p className="text-sm text-gray-500 text-center">Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;