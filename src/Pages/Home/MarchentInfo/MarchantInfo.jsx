import React from "react";
import bgImage from "../../../assets/be-a-merchant-bg.png";
import locationMerchant from "../../../assets/location-merchant.png";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const MarchantInfo = () => {
    return (
        <section className="bg-secondary py-20 px-6 md:px-12 rounded-3xl w-10/12 mx-auto text-white relative my-10">
            {/* Wave SVG */}
            <div className="absolute top-0 left-1 w-full">
                <img src={bgImage} alt="wave" className="w-full" />
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold mb-4">
                        Merchant and Customer Satisfaction <br /> is Our First Priority
                    </h2>
                    <p className="text-base mb-6">
                        We offer the lowest delivery charge with the highest value along with <br /> 100% safety of your product. Pathao courier delivers your parcels in every <br /> corner of Bangladesh right on time.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex justify-center items-center">
                            <button className="inline-flex items-center rounded-3xl bg-primary px-5 py-2.5 text-black font-semibold hover:bg-[#c9f24d] transition">Track Your Parcel</button>
                            <BsArrowUpRightCircleFill className="w-9 h-9" />
                        </div>
                        <button className=" border text-primary px-6 py-2 rounded-full font-semibold">Earn with ZapShift Courier</button>
                    </div>
                </div>
                <div className="absolute  -top-6 left-120">
                    <img src={locationMerchant} alt="location" className="w-full" />
                </div>
            </div>
        </section>
    );
};

export default MarchantInfo;
