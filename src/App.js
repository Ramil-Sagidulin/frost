import './App.css';
import Header from "./components/header/Header";
import Footer from './components/footer/Footer';
import {Link, Outlet} from "react-router-dom";
import axios from "axios";
import UserPage from "./components/userPage/UserPage";

// https://www.figma.com/file/a3N9KNRa4VZRMKpTYkhFW7iE/Frost?t=zFUr6oaFootS0E6h-1
function App() {
    // axios.post('https://frost.runtime.kz/oauth/token',{
    //     grant_type:'password',
    //     client_id:2,
    //     client_secret:'XxVdySeTHQ6dKC8hnCh8rnpKL0twqNE9303Wc6Xe',
    //     username:'mzulauf@example.net',
    //     password:'password',
    // },{
    //     headers:{
    //         'Content-Type':'application/x-www-form-urlencoded',
    //     },
    // })
    //     .then((function (res){
    //         console.log(res)
    //     }));

    // axios.get('https://frost.runtime.kz/api/cart',{
    //     headers:{
    //         Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiZGQ0NDlhYmMxZDYzMGJhYzdkZDQzYzA1ODc5ZDViNTA1NDE1NDljOWU3YzkxZTI3NDU3Mjk4ZjEwMWYxZTRkNGU4MzIwOGJjMzY1NjliYTUiLCJpYXQiOjE2OTc1NTQ0NjYuMDk3MDYyMSwibmJmIjoxNjk3NTU0NDY2LjA5NzA2NTksImV4cCI6MTcyOTE3Njg2Ni4wODk0OTU5LCJzdWIiOiIxMSIsInNjb3BlcyI6W119.hAHA_qItNNfzyIhDEooMpH3j5IZZYyOzYKi7Qc33qOllp8-RQokwSg7tbMSE2AlD-Mo5w2W4sc2U4YuPr-lX6RvL9pMTiUDUEYO1M2bhqTNDuVKfh0GDKEZsOG7xkIX0tlLm-OooDu_g9xzbUMekjfg18rl0BWL2UJtW6NpyRPmEnMJE42K4Ob-_RJaXNn2_6Uq92WS4FWkKsFZtmmYA0pvs8s7JkdIV9aG_rbZ1oln1yoxerXNtjI_1IIu5folTOQOaBBOFBtJV5pPDwietSVFsbmOY1vkLc1X9mhLgCwjtVey6goX4k4rg1Y_3peCNGYeJBV8gOf18IgtcIhcZdy659xoBrN1Gc5GKyF2MTi2tWlpjJOp3ASeShjM5qg9-a6cmHZXP6qX9bTXDdW2HzCmTqNbhdNi1E_l43FfoD7F5Lb6m0_VhiIPJVqmkAg5iKsfbP7GnfyX8drn1KJJUjENsUNkp2Wgbl2WYM2L_uy9Vq3SN305VCZlz6Thun-qcG6u3RYW9wnGBuek6YI1TXbHIK7c4_dZDzheyQbxWfilR6t4N0rQVRRVWAA1kKqADDi7UfVJ46NUV9HcqaB7H229e97Qm1O1Hhh9DFT7saXXLKzF55OJ7h6QyftsmeC5jsDOTy926tXMh3n8rtX0fYi6eOYKXhEnjj-FEDxGyPFQ',
    //     }
    // }).then(function (res){
    //     console.log(res.data)
    // })
    // axios.get('https://frost.runtime.kz/api/cart/add',{
    //     headers:{
    //         Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiZGQ0NDlhYmMxZDYzMGJhYzdkZDQzYzA1ODc5ZDViNTA1NDE1NDljOWU3YzkxZTI3NDU3Mjk4ZjEwMWYxZTRkNGU4MzIwOGJjMzY1NjliYTUiLCJpYXQiOjE2OTc1NTQ0NjYuMDk3MDYyMSwibmJmIjoxNjk3NTU0NDY2LjA5NzA2NTksImV4cCI6MTcyOTE3Njg2Ni4wODk0OTU5LCJzdWIiOiIxMSIsInNjb3BlcyI6W119.hAHA_qItNNfzyIhDEooMpH3j5IZZYyOzYKi7Qc33qOllp8-RQokwSg7tbMSE2AlD-Mo5w2W4sc2U4YuPr-lX6RvL9pMTiUDUEYO1M2bhqTNDuVKfh0GDKEZsOG7xkIX0tlLm-OooDu_g9xzbUMekjfg18rl0BWL2UJtW6NpyRPmEnMJE42K4Ob-_RJaXNn2_6Uq92WS4FWkKsFZtmmYA0pvs8s7JkdIV9aG_rbZ1oln1yoxerXNtjI_1IIu5folTOQOaBBOFBtJV5pPDwietSVFsbmOY1vkLc1X9mhLgCwjtVey6goX4k4rg1Y_3peCNGYeJBV8gOf18IgtcIhcZdy659xoBrN1Gc5GKyF2MTi2tWlpjJOp3ASeShjM5qg9-a6cmHZXP6qX9bTXDdW2HzCmTqNbhdNi1E_l43FfoD7F5Lb6m0_VhiIPJVqmkAg5iKsfbP7GnfyX8drn1KJJUjENsUNkp2Wgbl2WYM2L_uy9Vq3SN305VCZlz6Thun-qcG6u3RYW9wnGBuek6YI1TXbHIK7c4_dZDzheyQbxWfilR6t4N0rQVRRVWAA1kKqADDi7UfVJ46NUV9HcqaB7H229e97Qm1O1Hhh9DFT7saXXLKzF55OJ7h6QyftsmeC5jsDOTy926tXMh3n8rtX0fYi6eOYKXhEnjj-FEDxGyPFQ'
    //     },
    //     params:{
    //         productId:3,
    //     },
    // }).then(function (){
    //     console.log('success')
    // })

    return (
        <>
            {/*<div>*/}
            {/*    <Header/>*/}
            <UserPage/>
            {/*    <Outlet/>*/}
            {/*</div>*/}
            {/*<Footer/>*/}
        </>

    );
}

export default App;
