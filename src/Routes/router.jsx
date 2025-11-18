import { createBrowserRouter } from "react-router";
import RootLayout from "../LayOuts/RootLayout";
import Home from "../Pages/Home/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AboutUs from "../Pages/AbpoutUs/AboutUs";
import AuthLayout from "../LayOuts/AuthLayout/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import BeARider from "../Pages/BeARider/BeARider";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "/rider",
                element: <PrivateRoute>
                    <BeARider/>
                </PrivateRoute>
            },
            {
                path:"/coverage",
                Component: Coverage,
                loader: () => fetch('/serviceArea.json').then(res => res.json())
            },
            {
                path: "/aboutUs",
                Component: AboutUs
            }
        ]
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path: "/login",
                Component: Login
            },
            {
                path: "/register",
                Component: Register
            }
        ]
    }
]);


