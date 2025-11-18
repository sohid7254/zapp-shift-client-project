import React, { useState } from "react";

const AboutUs = () => {
    const [activeTab, setActiveTab] = useState("Story");

    return (
        <section className="max-w-6xl mx-auto px-4 py-10 bg-base-100 rounded-2xl my-10 lg:p-15">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-gray-600 mb-6">
                Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.
            </p>

            <div className="border border-gray-300 mb-6"></div>

            <div className="flex gap-4 mb-6">
                {["Story", "Mission", "Success", "Team & Others"].map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={` font-bold py-2 text-2xl rounded-full  ${activeTab === tab ? " text-gray-600   underline" : " text-gray-700 "}`}>
                        {tab}
                    </button>
                ))}
            </div>

            <div className="text-gray-700 leading-relaxed">
                {activeTab === "Story" && (
                    <>
                        <div className="space-y-4">
                            <p>
                                <strong>We began</strong> with a simple promise — to make parcel delivery fast, reliable, and stress-free. What started as a small initiative has grown into a trusted logistics partner for thousands across Bangladesh. From the beginning, our focus has been on solving
                                everyday delivery challenges with smart technology, real-time tracking, and a customer-first mindset.
                            </p>
                            <p>
                                <strong>Each parcel</strong> we handle carries more than just contents — it carries emotion, urgency, and trust. Whether it’s a birthday gift, an important document, or a business shipment, we treat every delivery with care and precision. Our platform empowers users
                                to track their parcels in real time, receive timely updates, and connect with support whenever needed.
                            </p>
                            <p>
                                <strong>But our</strong> story isn’t just about technology — it’s about people. Our dedicated team of logistics experts, delivery professionals, and customer service champions work tirelessly to ensure every package reaches its destination safely and on time. We
                                believe in building lasting relationships through dependable service and transparent communication.
                            </p>
                            <p>
                                <strong>As we</strong> continue to grow, our commitment remains the same: to deliver peace of mind with every parcel. Because for us, delivery isn’t just a service — it’s a promise we keep, every single day.
                            </p>
                        </div>
                    </>
                )}
                {activeTab === "Mission" && (
                    <>
                        <div className="space-y-4">
                            <p>
                                <strong>Our mission</strong> is to transform the way people experience parcel delivery — making it faster, smarter, and more human. We believe that logistics should be seamless and stress-free, whether you're sending a personal gift or managing high-volume business
                                shipments. That’s why we’ve built a system that combines intelligent routing, real-time tracking, and responsive customer care.
                            </p>
                            <p>
                                We aim to empower individuals and businesses with tools that simplify their lives. From intuitive booking to transparent delivery updates, every step of our process is designed with the user in mind. We’re not just moving packages — we’re moving trust, reliability,
                                and peace of mind.
                            </p>
                            <p>
                                At the heart of our mission is a deep respect for time and relationships. We understand that every delivery matters, and we treat each one with urgency and care. Our team is driven by a shared purpose: to make sure your parcels arrive safely, on time, and without
                                hassle.
                            </p>
                            <p>As we look to the future, we remain committed to innovation, sustainability, and service excellence. Our mission is ongoing — and every delivery is a chance to fulfill it.</p>
                        </div>
                    </>
                )}
                {activeTab === "Success" && (
                    <>
                        <div className="space-y-4">
                            <p>
                                <strong>Success</strong> for us isn’t just measured in numbers — it’s measured in trust earned, promises kept, and smiles delivered. Since our launch, we’ve completed over a million deliveries across Bangladesh, maintaining a 99.9% on-time rate and earning the loyalty
                                of thousands of customers.
                            </p>
                            <p>
                                Our growth has been fueled by consistency, innovation, and a relentless focus on customer satisfaction. We’ve built a delivery network that reaches deep into cities, towns, and rural areas — ensuring that no destination is too far and no parcel is too small. From
                                e-commerce businesses to everyday senders, we’ve become the go-to partner for reliable logistics.
                            </p>
                            <p>But our biggest success lies in the relationships we’ve built. Every positive review, every repeat customer, and every referral is a testament to the care we put into our work. We don’t just deliver packages — we deliver confidence.</p>
                            <p>As we scale, we remain grounded in the values that brought us here: transparency, accountability, and excellence. Our success is shared with every customer who trusts us, every team member who delivers with pride, and every community we serve.</p>
                        </div>
                    </>
                )}
                {activeTab === "Team & Others" && (
                    <>
                        <div className="space-y-4">
                            <p>
                                <strong>Behind</strong> every successful delivery is a team of passionate people working with purpose. Our team is made up of logistics experts, tech innovators, customer support heroes, and delivery professionals — all united by a shared mission to make parcel
                                delivery better for everyone.
                            </p>
                            <p>We believe that great service starts from within. That’s why we invest in training, collaboration, and a culture of ownership. Every team member, from the warehouse to the customer care desk, plays a vital role in ensuring your parcel arrives safely and on time.</p>
                            <p>
                                We also believe in using technology to empower people — not replace them. Our systems are designed to support our team’s efficiency, not overshadow their human touch. Whether it’s optimizing routes or resolving customer queries, we blend smart tools with real empathy.
                            </p>
                            <p>Beyond our core team, we work with a network of partners, vendors, and community members who help us extend our reach and impact. Together, we’re building a delivery ecosystem that’s fast, fair, and future-ready.</p>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default AboutUs;
