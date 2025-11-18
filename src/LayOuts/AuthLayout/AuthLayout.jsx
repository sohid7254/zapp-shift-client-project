import React from "react";
import Logo from "../../Component/Logo";
import { Outlet } from "react-router";
import authImage from "../../assets/authImage.png";
const AuthLayout = () => {
    return (
        <div className="max-w-7xl mx-auto min-h-screen flex">
            {/* Left Side */}
            <div className="flex-1 bg-[#ffffff] p-8 flex flex-col">
                {/* Logo stays at top */}
                <Logo />

                {/* Centered Outlet content */}
                <div className="grow flex items-center justify-center">
                    <Outlet />
                </div>
            </div>

            {/* Right Side */}
            <div className="flex-1 bg-[#fafcf0] flex items-center justify-center">
                <img src={authImage} alt="" className="max-w-full h-auto" />
            </div>
        </div>
    );
};

export default AuthLayout;
