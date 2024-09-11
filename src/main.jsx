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
import FreeDeliver from './FooterSectonPages/FreeDeliver';
import ProductWarranty from './FooterSectonPages/ProductWarranty';
import BonusSystem from './FooterSectonPages/BonusSystem';
import Help from './FooterSectonPages/Help';
import AllCattegores from './AllCategores/AllCattegores';
import Smartfonvagadjetlar from './AllCategores/Smartfonvagadjetlar';
import Kompyutertexnikasi from './AllCategores/Kompyutertexnikasi';
import Televizorlarvaaudiotexnikalar from './AllCategores/Televizorlarvaaudiotexnikalar';
import Iqlimtexnikasi from './AllCategores/Iqlimtexnikasi';
import Maishiytexnika from './AllCategores/Maishiytexnika';
import Ofisjihozlari from './AllCategores/Ofisjihozlari';
import Oshxonauchuntexnika from './AllCategores/Oshxonauchuntexnika';
import Uyuchunidishlar from './AllCategores/Uyuchunidishlar';
import Avtomobiluchunmahsulotlar from './AllCategores/Avtomobiluchunmahsulotlar';
import Gozallikvasalomatlik from './AllCategores/Gozallikvasalomatlik';
import Qurilishvatamirlash from './AllCategores/Qurilishvatamirlash';
import Boguchuntexnika from './AllCategores/Boguchuntexnika';
import Sportvasevimlimashgulot from './AllCategores/Sportvasevimlimashgulot';
import Maishiymahsulotlar from './AllCategores/Maishiymahsulotlar';
import Aksiyalarvaсhegirmalar from './AllCategores/Aksiyalarvaсhegirmalar';


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
    {
        path: "/free-delivery",
        element: <FreeDeliver />
    },
    {
        path: "/product-warranty",
        element: <ProductWarranty />
    },
    {
        path: "/bonus-system",
        element: <BonusSystem />
    },
    {
        path: "/help",
        element: <Help />
    },
    {
        path: "/allcategories",
        element: <AllCattegores />
    },
    {
        path: "/smartfonlarvagadjetlar",
        element: <Smartfonvagadjetlar />
    },
    {
        path: "/kompyutertexnikasi",
        element: <Kompyutertexnikasi />
    },
    {
        path: "/televizorlarvaaudiotexnikalar",
        element: <Televizorlarvaaudiotexnikalar />
    },
    {
        path: "/iqlimtexnikasi",
        element: <Iqlimtexnikasi />
    },
    {
        path: "/maishiytexnika",
        element: <Maishiytexnika />
    },
    {
        path: "/ofisjihozlari",
        element: <Ofisjihozlari />
    },
    {
        path: "/oshxonauchuntexnika",
        element: <Oshxonauchuntexnika />
    },
    {
        path: "/uyuchunidishlar",
        element: <Uyuchunidishlar />
    },
    {
        path: "/avtomobiluchunmahsulotlar",
        element: <Avtomobiluchunmahsulotlar />
    },
    {
        path: "/gozallikvasalomatlik",
        element: <Gozallikvasalomatlik />
    },
    {
        path: "/qurilishvatamirlash",
        element: <Qurilishvatamirlash />
    },
    {
        path: "/boguchuntexnika",
        element: <Boguchuntexnika />
    },
    {
        path: "/sportvasevimlimashgulot",
        element: <Sportvasevimlimashgulot />
    },
    {
        path: "/maishiymahsulotlar",
        element: <Maishiymahsulotlar />
    },
    {
        path: "/aksiyalarvaсhegirmalar",
        element: <Aksiyalarvaсhegirmalar />
    },
    {
        path: "/telefonlar",
        element: <Telefonlar />
    }

]);

ReactDOM.render(
    <RouterProvider router={router} />,
    document.getElementById('root')
);
