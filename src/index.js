import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProductInfo from './components/productInfo/ProductInfo'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/cart/Cart";
import ContactDetails from "./components/cart_contact_details/ContactDetails";
import Delivery from "./components/cart_delivery/Delivery";
import Completion from "./components/cartCompletion/Completion";
import MainPage from "./Pages/main_page/MainPage";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";
import ContactInfo from './Pages/userPage/ContactInfo';
import Orders from './Pages/userPage/Orders';
import DeliveryInfo from './Pages/userPage/DeliveryInfo';
import axios from "axios";
import NeedAuth from "./components/needAuth/NeedAuth";
axios.defaults.baseURL='https://frost.runtime.kz/api';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <MainPage />
            },
            {
                path: '/second',
                element:<NeedAuth> <Cart /></NeedAuth>
            },
            {
                path: '/info/:product_id',
                element: <ProductInfo />
            },
            {
                path: '/Contact-details',
                element: <ContactDetails />
            },
            {
                path: '/delivery',
                element: <Delivery />
            },
            {
                path: '/completion',
                element: <Completion />
            },
            {
                path: '/contact-info',
                element: <ContactInfo />
            },
            {
                path:'/my-orders',
                element:<NeedAuth> <Orders/></NeedAuth>
                },
            {
                path:'/delivery-info',
                element:<DeliveryInfo/>
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ReduxProvider store={store}>
        <RouterProvider router={router}/>
    </ReduxProvider>
);
