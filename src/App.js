import './App.css';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import { Outlet } from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {checkTokenAndGetUser} from "./features/auth/authSlice";
import {setProductCountInCart} from "./features/cart/cartSlice";

// https://www.figma.com/file/a3N9KNRa4VZRMKpTYkhFW7iE/Frost?t=zFUr6oaFootS0E6h-1
function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkTokenAndGetUser());
    }, [dispatch]);
    const cartCount = useSelector(state => state.cart.cartItem);
    useEffect(() => {
        dispatch(setProductCountInCart(cartCount.length))
    }, [cartCount])
        return (
            <>
                <div>
                    <Header/>
                    <Outlet/>
                </div>
                
                <Footer/>
            </>
        );
}

export default App;
