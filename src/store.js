import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import cartReducer from "./features/cart/cartSlice";
import filterReducer from "./features/filter/filterSlice";
import ordersSlice from "./features/ordersSlice/ordersSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        filter:filterReducer,
        orders:ordersSlice,
    },
});