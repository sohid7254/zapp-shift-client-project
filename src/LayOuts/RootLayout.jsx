
import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Pages/Shared/NavBar/NavBar';
import Footer from '../Pages/Shared/Footer/Footer';


const RootLayout = () => {
    return (
        <div className="max-w-7xl mx-auto min-h-screen flex flex-col">
            {/* Top NavBar */}
            <NavBar />

            {/* Middle content expands to fill space */}
            <div className="grow">
                <Outlet />
            </div>

            {/* Bottom Footer */}
            <Footer />
        </div>
    );
};

export default RootLayout;