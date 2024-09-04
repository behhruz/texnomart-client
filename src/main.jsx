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
import Card from "./components/Card";
import B507 from "./components/b507";
import DCC3 from './components/dcc3'; 
import Xiaomi from './components/93d3'
import Huawei from "./components/8fde";
import Honor from './components/Honor'
import Iphone from "./components/f67c";
import Vivo from "./components/f2b6";
import Infinix from "./components/a928";
import Oppo from "./components/53cd";
import Hansa from "./components/9a1c";
import Hisense from "./components/78ea";
import Tefal from "./components/d60e";
import DeLonghi from "./components/68bb";
import Moulinex from "./components/270c";
import Rowenta from "./components/7b65";
import Karcher from "./components/dd17";
import Krups from "./components/3cc1";
import ProductDetail from "./components/ProductDetail"; // Import your ProductDetail component

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
        path: '/ddd',
        element: <Card/>
    },
    {
        path: '/b507',
        element: <B507/>
    },
    {
        path: '/dcc3',
        element: <DCC3/>
    },
    {
        path: "/93d3",
        element: <Xiaomi/>,
    },
    {
        path: "/8fde",
        element: <Huawei/>,
    },
    {
        path: "/5d15",
        element: <Honor/>,
    },
    {
        path: "/f67c",
        element: <Iphone/>,
    },
    {
        path: "/f2b6",
        element: <Vivo/>,
    },
    {
        path: "/a928",
        element: <Infinix/>,
    },
    {
        path: "/53cd",
        element: <Oppo/>,
    },
    {
        path: "/9a1c",
        element: <Hansa/>,
    },
    {
        path: "/78ea",
        element: <Hisense/>,
    },
    {
        path: "/d60e",
        element: <Tefal/>,
    },
    {
        path: "/68bb",
        element: <DeLonghi/>,
    },
    {
        path: "/270c",
        element: <Moulinex/>,
    },
    {
        path: "/7b65",
        element: <Rowenta/>,
    },
    {
        path: "/dd17",
        element: <Karcher/>,
    },
    {
        path: "/3cc1",
        element: <Krups/>,
    },
    {
        path: "/product/:id", // Dynamic route
        element: <ProductDetail />, // Component to render
    }
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
