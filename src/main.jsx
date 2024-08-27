import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "./App";
import Promotions from "./components/promotions";
import Installments from "./components/installments";
import Conditioners from "./components/conditioners";
import Smartphones from "./components/smartphones";
import Refrigerators from "./components/refrigerators";
import Vacuumcleaners from "./components/vacuum-cleaners";
import AllCategories from "./components/all-categories";
import Favorites from "./components/Favorites";
import Cart from "./components/Cart";
import Stores from "./components/Stores";
import Legal from "./components/Legal";
import PaymentMethods from "./components/PaymentMethods";       
import Login from "./components/Login";
import Computers from "./components/computers";
import Tvs from "./components/tvs";
import Climate from "./components/climate";
import Hometech from "./components/home-tech";
import Officetech from "./components/office-tech";
import Kitchentech from "./components/kitchen-tech";
import Household from "./components/household";
import Autogoods from "./components/auto-goods";
import Audio from "./components/audio";
import Beautyhealth from "./components/beauty-health";
import LoginPage from "./components/Login";
import Card from "./components/Card";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/promotions",
        element: <Promotions />,
    },
    {
        path: "/installments",
        element: <Installments />,
    },
    {
        path: "/conditioners",
        element: <Conditioners />,
    },
    {
        path: "/smartphones",
        element: <Smartphones />,
    },
    {
        path: "/refrigerators",
        element: <Refrigerators />,
    },
    {
        path: "/vacuum-cleaners",
        element: <Vacuumcleaners />,
    },
    {
        path: "/all-categories",
        element: <AllCategories />,
    },
    {
        path: "/favorites",
        element: <Favorites />,
    },
    {
        path: "/cart",
        element: <Cart />,
    },
    {
        path: "/stores",
        element: <Stores />,
    },
    {
        path: "/legal",
        element: <Legal />,
    },
    {
        path: "/payment-methods",
        element: <PaymentMethods />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    
    {
        path: "/tvs",
        element: <Tvs />,
    },
    {
        path: "/home-tech",
        element: <Hometech />,
    },
    {
        path: "/office-tech",
        element: <Officetech />,
    },
    {
        path: "/kitchen-tech",
        element: <Kitchentech />,
    },
    {
        path: "/household",
        element: <Household />,
    },
    {
        path: "/auto-goods",
        element: <Autogoods/>,
    },
    {
        path: "/audio",
        element: <Audio/>,
    },
    {
        path: "/beauty-health",
        element: <Beautyhealth/>,
    },
    {
        path: "/computers",
        element: <Computers/>,
    },
    {
        path: "/climate",
        element: <Climate/>,
    },
    {
        path : '/ddd',
        element: <Card/>
    }

    
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
