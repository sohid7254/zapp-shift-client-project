import { StrictMode } from 'react'

import './index.css'
import { router } from './Routes/router';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import AuthProvider from './Context/AuthContext/AuthProvider';




createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>
);
