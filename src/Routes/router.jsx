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
import ForgetPass from "../Pages/Auth/ForgetPass/ForgetPass";
import Pricing from "../Pages/Pricing/Pricing";
import AddAParcel from "../Pages/AddAPArcel/AddAParcel";
import DashboardLayout from "../LayOuts/DashboardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../Pages/Dashboard/Payment/PaymentSuccess";
import PaymentCalceled from "../Pages/Dashboard/Payment/PaymentCalceled";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/rider",
                element: (
                    <PrivateRoute>
                        <BeARider />
                    </PrivateRoute>
                ),
            },
            {
                path: "/addAParcel",
                Component: AddAParcel,
                loader: () => fetch("/serviceArea.json").then((res) => res.json()),
            },
            {
                path: "/coverage",
                Component: Coverage,
                loader: () => fetch("/serviceArea.json").then((res) => res.json()),
            },
            {
                path: "/aboutUs",
                Component: AboutUs,
            },
            {
                path: "/pricing",
                Component: Pricing,
            },
        ],
    },
    {
        path: "/",
        Component: AuthLayout,
        children: [
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/register",
                Component: Register,
            },
            {
                path: "/forgetPass",
                Component: ForgetPass,
            },
        ],
    },
    {
        path: "dashboard",
        element: <PrivateRoute>
            <DashboardLayout/>
        </PrivateRoute>,
        children: [
            {
                path: 'my-parcels',
                Component: MyParcels,

            },
            {
                path: 'payment/:parcelId',
                Component: Payment,
            },
            {
                path: 'payment-success',
                Component: PaymentSuccess,
            },
            {
                path: 'payment-cancelled',
                Component: PaymentCalceled
            }
        ]
    }
]);


