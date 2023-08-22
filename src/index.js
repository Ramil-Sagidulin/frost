import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Product_list from './components/product_list/Product_list';
import ProductInfo from  './components/productInfo/ProductInfo'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Cart from "./components/cart/Cart";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                index: true,
                element: <Product_list/>
            },
            {
                path: '/second',
                element: <Cart/>
            },
            {
                path: '/info/:product_id',
                element: <ProductInfo/>
            }
        ]
    },
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);
