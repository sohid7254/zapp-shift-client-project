import React from "react";
import Logo from "../../../Component/Logo";
import { Link, NavLink } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const NavBar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then((result) => {
                console.log("logged out", result);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const links = (
        <>
            <li>
                <NavLink to={"/"} className={({ isActive }) => (isActive ? "bg-primary text-gray-600 px-4 py-1 rounded-full font-bold" : "text-gray-700 px-4 py-1 font-bold")}>
                    Services
                </NavLink>
            </li>
            <li>
                <NavLink to={"/coverage"} className={({ isActive }) => (isActive ? "bg-primary text-gray-600 px-4 py-1 rounded-full font-bold" : "text-gray-700 px-4 py-1 font-bold")}>
                    Coverage
                </NavLink>
            </li>
            <li>
                <NavLink to={"/aboutUs"} className={({ isActive }) => (isActive ? "bg-primary text-gray-600 px-4 py-1 rounded-full font-bold" : "text-gray-700 px-4 py-1 font-bold")}>
                    About Us
                </NavLink>
            </li>
            {user ? (
                <>
                    <li>
                        <NavLink to={"/pricing"} className={({ isActive }) => (isActive ? "bg-primary text-gray-600 px-4 py-1 rounded-full font-bold" : "text-gray-700 px-4 py-1 font-bold")}>
                            Pricing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/addAParcel"} className={({ isActive }) => (isActive ? "bg-primary text-gray-600 px-4 py-1 rounded-full font-bold" : "text-gray-700 px-4 py-1 font-bold")}>
                            Send A Parcel
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/my-parcels"} className={({ isActive }) => (isActive ? "bg-primary text-gray-600 px-4 py-1 rounded-full font-bold" : "text-gray-700 px-4 py-1 font-bold")}>
                            My Parcels
                        </NavLink>
                    </li>
                </>
            ) : (
                " "
            )}
            
        </>
    );
    return (
        <div className="navbar bg-base-100 px-4 shadow-sm rounded-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {" "}
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
                        </svg>
                    </div>
                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="ml-4 text-xl">
                    <Logo />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" flex gap-4 px-1">{links}</ul>
            </div>
            <div className="navbar-end gap-4">
                {user ? (
                    <button onClick={handleLogOut} className="btn rounded-xl">
                        Sign Out
                    </button>
                ) : (
                    <Link to={"/login"} className="btn rounded-xl">
                        Sign In
                    </Link>
                )}
                <Link to={"/rider"} className="flex justify-center items-center">
                    <p className="btn rounded-xl btn-primary text-black">Be a rider</p>
                    <BsArrowUpRightCircleFill className="w-7 h-7" />
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
