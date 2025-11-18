import React from 'react';
import Logo from '../../../Component/Logo';
import fackebook from "../../../assets/Group 10036.png"
import twiter from "../../../assets/twitter-logo-2 3.png"
import linkdiin from "/src/assets/Vector.png"
import youtube from "/src/assets/fi_3670209.png"

const Footer = () => {
    return (
        <footer className="footer footer-horizontal bg-[#0B0B0B] text-white rounded-2xl footer-center  p-10">
            <aside>
                <Logo />

                <p className="font-bold">
                    ACME Industries Ltd.
                    <br />
                    Providing reliable tech since 1992
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <img src={fackebook} alt="" />
                    </a>
                    <a>
                        <img src={linkdiin} alt="" />
                    </a>
                    <a>
                        <img src={twiter} alt="" />
                    </a>
                    <a>
                        <img src={youtube} alt="" />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;