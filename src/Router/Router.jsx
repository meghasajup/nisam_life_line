import React from 'react'
import { RootLayout } from '../Layout/RootLayout'
import { AboutPage } from '../Pages/AboutPage'
import { ContactPage } from '../Pages/ContactPage'
import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
import { Technologies } from '../Pages/Technologies'
import CMSDevelopment from '../Pages/CMSDevelopment'
import EcommerceDevelopment from '../Pages/EcommerceDevelopment'
import MaintenanceSupport from '../Pages/MaintenanceSupport'
import MobileDevelopment from '../Pages/mobileDevelopment'
import TestingQualityAnalysis from '../Pages/TestingQualityAnalysis'
import UIDesignService from '../Pages/UidesignService'
import WebDevelopmentService from '../Pages/webisteDevelopment'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
//keshu
            {
                path: "About",
                element: <AboutPage />
            },


            {
                path: "contact",
                element: <ContactPage />
            },
//Megha
            {
                path: "Technologies",
                element: <Technologies />
            },

//jeswin

            {
                path: "CMSDevelopment",
                element: <CMSDevelopment />
            },
            {
                path: "EcommerceDevelopment",
                element: <EcommerceDevelopment />
            },
            {
                path: "MaintenanceSupport",
                element: <MaintenanceSupport />
            },
            {
                path: "MobileDevelopment",
                element: <MobileDevelopment />
            },

            {
                path: "TestingQualityAnalysis",
                element: <TestingQualityAnalysis />
            },
            {
                path: "UIDesignService",
                element: <UIDesignService />
            },


            {
                path: "WebDevelopmentService",
                element: <WebDevelopmentService />
            },

        ]
    },



])
