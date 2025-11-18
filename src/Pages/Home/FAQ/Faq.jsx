import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="px-4 md:px-0 my-10">
            <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-3xl font-bold mb-3">Frequently Asked Question (FAQ)</h2>
                <p className="text-gray-600">Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>

            <div className="max-w-3xl mx-auto">
                {/* Item 1 */}
                <div className={`border rounded-xl mb-4 shadow-sm overflow-hidden ${openIndex === 0 ? "bg-[#e6f1f2]" : "bg-white"}`}>
                    <button onClick={() => setOpenIndex(openIndex === 0 ? null : 0)} className="w-full flex justify-between items-center p-5 text-left text-lg font-medium text-gray-700">
                        How does this posture corrector work?
                        {openIndex === 0 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {openIndex === 0 && <div className="px-5 pb-5 text-gray-600 leading-relaxed">A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.</div>}
                </div>

                {/* Item 2 */}
                <div className={`border rounded-xl mb-4 shadow-sm overflow-hidden ${openIndex === 1 ? "bg-[#e6f1f2]" : "bg-white"}`}>
                    <button onClick={() => setOpenIndex(openIndex === 1 ? null : 1)} className="w-full flex justify-between items-center p-5 text-left text-lg font-medium text-gray-700">
                        Is it suitable for all ages and body types?
                        {openIndex === 1 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {openIndex === 1 && <div className="px-5 pb-5 text-gray-600 leading-relaxed">Yes, it is designed to fit a wide range of ages and body types.</div>}
                </div>

                {/* Item 3 */}
                <div className={`border rounded-xl mb-4 shadow-sm overflow-hidden ${openIndex === 2 ? "bg-[#e6f1f2]" : "bg-white"}`}>
                    <button onClick={() => setOpenIndex(openIndex === 2 ? null : 2)} className="w-full flex justify-between items-center p-5 text-left text-lg font-medium text-gray-700">
                        Does it really help with back pain and posture improvement?
                        {openIndex === 2 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {openIndex === 2 && <div className="px-5 pb-5 text-gray-600 leading-relaxed">Many users report noticeable improvement in posture and reduction in back pain with consistent use.</div>}
                </div>

                {/* Item 4 */}
                <div className={`border rounded-xl mb-4 shadow-sm overflow-hidden ${openIndex === 3 ? "bg-[#e6f1f2]" : "bg-white"}`}>
                    <button onClick={() => setOpenIndex(openIndex === 3 ? null : 3)} className="w-full flex justify-between items-center p-5 text-left text-lg font-medium text-gray-700">
                        Does it have smart features like vibration alerts?
                        {openIndex === 3 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {openIndex === 3 && <div className="px-5 pb-5 text-gray-600 leading-relaxed">Some models offer vibration alerts that notify you when you slouch.</div>}
                </div>

                {/* Item 5 */}
                <div className={`border rounded-xl mb-4 shadow-sm overflow-hidden ${openIndex === 4 ? "bg-[#e6f1f2]" : "bg-white"}`}>
                    <button onClick={() => setOpenIndex(openIndex === 4 ? null : 4)} className="w-full flex justify-between items-center p-5 text-left text-lg font-medium text-gray-700">
                        How will I be notified when the product is back in stock?
                        {openIndex === 4 ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    {openIndex === 4 && <div className="px-5 pb-5 text-gray-600 leading-relaxed">You can sign up for email notifications on our website to get alerts when it's restocked.</div>}
                </div>

                <div className="text-center mt-8">
                    <div className="flex justify-center items-center">
                        <button className="inline-flex items-center rounded-3xl bg-primary px-5 py-2.5 text-black font-semibold hover:bg-[#c9f24d] transition">See More FAQs</button>
                        <BsArrowUpRightCircleFill className="w-9 h-9" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq;
