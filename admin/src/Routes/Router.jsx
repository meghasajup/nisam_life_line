import React from 'react'
import Recently_Deleted from '../pages/Recently_Deleted.jsx'
import HomePage from '../pages/HomePage.jsx'
import { HomePageLayout } from '../Layout/HomePageLayout.jsx'
import { createBrowserRouter } from 'react-router-dom'
import LoginPage from '../pages/LoginPage.jsx'
import { AdminAuth } from './protectedRoutes/AdminAuth.jsx'

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: "/",
        element: <HomePageLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/recently-deleted",
                element: <Recently_Deleted />
            }
        ]
    },
])
