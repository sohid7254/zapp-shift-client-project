import {  QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";

import "./index.css";
import { router } from "./Routes/router";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import AuthProvider from "./Context/AuthContext/AuthProvider";


const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <RouterProvider router={router} />
            </AuthProvider>
        </QueryClientProvider>
    </StrictMode>
);
