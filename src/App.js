import './App.css';
import Header from "./components/header/Header";
import Product_list from "./components/product_list/Product_list";
import Footer from './components/footer/Footer';
import {Link, Outlet} from "react-router-dom";

// https://www.figma.com/file/a3N9KNRa4VZRMKpTYkhFW7iE/Frost?t=zFUr6oaFootS0E6h-1
function App() {

    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>

    );
}

export default App;
