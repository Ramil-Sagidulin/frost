import './App.css';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import {Link, Outlet} from "react-router-dom";

// https://www.figma.com/file/a3N9KNRa4VZRMKpTYkhFW7iE/Frost?t=zFUr6oaFootS0E6h-1
function App() {

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
