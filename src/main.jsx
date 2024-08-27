import React from 'react';
import ReactDOM from 'react-dom';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import App from './App';
import Promotions from './components/promotions';
import Installments from './components/installments';
import Conditioners from './components/conditioners';
import Smartphones from './components/smartphones';
import Refrigerators from './components/refrigerators';
import Vacuumcleaners from './components/vacuum-cleaners';
import AllCategories from './components/all-categories';
import Favorites from './components/Favorites';
import Cart from './components/Cart';
import Stores from './components/Stores';
import Legal from './components/Legal';
import PaymentMethods from './components/PaymentMethods';
import Login from './components/Login';
import Tvs from './components/tvs';
import Climate from './components/climate';
import Hometech from './components/home-tech';
import Officetech from './components/office-tech';
import Kitchentech from './components/kitchen-tech';
import Household from './components/household';
import Autogoods from './components/auto-goods';
import Audio from './components/audio';
import Beautyhealth from './components/beauty-health';
import Telefonlar from './Cattegory/Telefonlar';
import Changyutgich from './Cattegory/Changyutgich';
import Muzlatgich from './Cattegory/Muzlatgich';
import Kompyuter from './Cattegory/Kompyuter';
import Televizor from './Cattegory/Televizor';
import Kofemashina from './Cattegory/Kofemashina';
import Kiryuvishmashina from './Cattegory/Kiryuvish-mashina';
import Fen from './Cattegory/Fen';
import Planshet from './Cattegory/Planshet';
import HovoSovutgich from './Cattegory/HovoSovutgich ';
import Lg from './Brands/Lg';
import Samsung from './Brands/Samsung';
import Xiaomi from './Brands/Xiaomi';
import Xuawei from './Brands/Xuawei';
import Honor from './Brands/Honor';
import Vivo from './Brands/Vivo';
import Apple from './Brands/Apple';
import Infinix from './Brands/Infinix';
import Oppo from './Brands/Oppo';
import Hansa from './Brands/Hansa';
import Hisense from './Brands/Hisense';
import Tefal from './Brands/Tefal';
import Delonghi from './Brands/Delonghi';
import Moulinex from './Brands/Moulinex';
import Rowenta from './Brands/Rowenta';
import Karcher from './Brands/Karcher';
import Krups from './Brands/Krups';
import Braun from './Brands/Braun';
import Yandex from './Brands/Yandex';
import Kenwood from './Brands/Kenwood';
import Philips from './Brands/Philips';
;

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
        element: <Autogoods />,
    },
    {
        path: "/audio",
        element: <Audio />,
    },
    {
        path: "/beauty-health",
        element: <Beautyhealth />,
    },
    {
        path: "/climate",
        element: <Climate />,
    },
    {
        path: "/hovo-sovutgich",
        element: <HovoSovutgich />,
    },
    {
        path: "/telefonlar",
        element: <Telefonlar />,
    },
    {
        path: "/changyutgich",
        element: <Changyutgich />,
    },
    {
        path: "/muzlatgich",
        element: <Muzlatgich />,
    },
    {
        path: "/kompyuter",
        element: <Kompyuter />,
    },
    {
        path: "/televizor",
        element: <Televizor />,
    },
    {
        path: "/kofe-mashina",
        element: <Kofemashina />,
    },
    {
        path: "/kiryuvish-mashina",
        element: <Kiryuvishmashina />,
    },
    {
        path: "/fen",
        element: <Fen />,
    },
    {
        path: "/planshet",
        element: <Planshet />,
    },
    {
        path: "/lg",
        element: <Lg />,
    },
    {
        path: "/samsung",
        element: <Samsung />,
    },
    {
        path: "/xiaomi",
        element: <Xiaomi />,
    },
    {
        path: "/huawei",
        element: <Xuawei />,
    },
    {
        path: "/honor",
        element: <Honor />,
    },
    {
        path: "/vivo",
        element: <Vivo />,
    },
    {
        path: "/apple",
        element: <Apple />,
    },
    {
        path: "/infinx",
        element: <Infinix />,
    },
    {
        path: "/oppo",
        element: <Oppo />,
    },
    {
        path: "/hansa",
        element: <Hansa />,
    },
    {
        path: "/hisense",
        element: <Hisense />,
    },
    {
        path: "/tefal",
        element: <Tefal />,
    },
    {
        path: "/delonghi",
        element: <Delonghi />,
    },
    {
        path: "/moulinex",
        element: <Moulinex />,
    },
    {
        path: "/rowenta",
        element: <Rowenta />,
    },
    {
        path: "/karcher",
        element: <Karcher />,
    },
    {
        path: "/krups",
        element: <Krups />,
    },
    {
        path: "/braun",
        element: <Braun />,
    },
    {
        path: "/yandex",
        element: <Yandex />,
    },
    {
        path: "/kenwood",
        element: <Kenwood />,
    },
    {
        path: "/philips",
        element: <Philips />,
    },

]);

ReactDOM.render(
    <RouterProvider router={router} />,
    document.getElementById('root')
);
