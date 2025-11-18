import React from 'react';
import Banner from '../Banner/Banner';
import HowItWorks from '../HowIt.jsx/HowItWorks';
import Services from '../Services/Services';
import Brands from '../Brands/Brands';
import Support from '../Support/Support';
import MarchantInfo from '../MarchentInfo/MarchantInfo';
import Reviews from '../Reviews/Reviews';
import { Fa0 } from 'react-icons/fa6';
import Faq from '../FAQ/Faq';

const reviewsPromise = fetch('/public/reviews.json').then(res => res.json())

const Home = () => {
    return (
        <div>
            <Banner/>
            <HowItWorks/>
            <Services/>
            <Brands/>
            <Support/>
            <MarchantInfo/>
            <Reviews reviewsPromise={reviewsPromise}/>
            <Faq/>
            
        </div>
    );
};

export default Home;