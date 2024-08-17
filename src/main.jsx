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
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
