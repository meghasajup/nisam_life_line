import React from 'react'
import Recently_Deleted from '../pages/Recently_Deleted.jsx'
import HomePage from '../pages/HomePage.jsx'
import { HomePageLayout } from '../Layout/HomePageLayout.jsx'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
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
