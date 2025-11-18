import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import tik from "../../../assets/reviewQuote.png"
const ReviewsCard = ({reviews}) => {
    const { review, user_photoURL, userName } = reviews;
    
    return (
        <div className=" bg-base-100 shadow-lg border border-gray-200 p-6 max-w-sm ">
            <div>
                {/* Quote Icon */}
                <img src={tik} alt="" className="text-2xl text-secondary opacity-40 mb-4" />

                {/* Quote Text */}
                <p className=" mb-4">{review}</p>

                <div className="border-t border-dashed border-gray-300 my-4"></div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                    <img src={user_photoURL} alt="" className="w-10 h-10 rounded-full bg-primary" />
                    <div>
                        <h4 className="text-lg font-bold text-gray-800">{userName}</h4>
                        <p className="text-sm text-gray-500">Senior Product Designer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;