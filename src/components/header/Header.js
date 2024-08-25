import './Header.css'
import logo from "./img/Frost logo.svg";
import basket from "./img/basket.svg";
import useModal from "../../hooks/useModal";
import ModalAuthorization from "../modal_authorization/ModalAuthorization";
import { Link } from "react-router-dom";
import ModalRegistration from '../modal_registration/ModalRegistration';
import {useDispatch, useSelector} from "react-redux";
import { signOutAuth } from '../../features/auth/authSlice';
import {setProductCountInCart} from "../../features/cart/cartSlice";
import {useEffect} from "react";

function Header() {

    const [visibleLogin, openLogin, closeLogin] = useModal();
    const [visibleRegistration, openRegistration, closeRegistration] = useModal();
    const productCount = useSelector(state=>state.cart.productCount);
    const authState = useSelector(state => state.auth);
    const cartCount = useSelector(state => state.cart.cartItem);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setProductCountInCart(cartCount.length))

    }, [cartCount])
    function signOut(){
        dispatch(signOutAuth());
        dispatch(setProductCountInCart(0));
    }

    return (
        <div className='header'>
            <div className='wrapper'>
                <ModalAuthorization visible={visibleLogin} close={closeLogin} />
                <ModalRegistration visible={visibleRegistration} close={closeRegistration} />
                <div className='header__wrapper'>
                    <Link to={'/'} className='header__logo'> <img src={logo} alt="Logo" /></Link>
                    <div className='header__city'>
                        <div>г.Астана</div>
                        <div>г.Алматы</div>
                    </div>
                    <div className='header__phone'>
                        <div>8-777-777-77-77</div>
                        <div>8-777-777-77-77</div>
                    </div>
                    <div className='header__search'>
                        <input className='header__search-form' placeholder='Поиск по каталогу...' />
                    </div>
                    {!authState.user ?
                        <div className='header__authorization'>
                            <div className='header__log-in authorization' id='signIn-button' onClick={openLogin }>Вход в личный
                                кабинет
                            </div>
                            <div className='header__register authorization' id='registration-button'
                                onClick={openRegistration}>Зарегистрироваться
                            </div>
                        </div>
                        :
                        <div className='headerAuthUser'>
                            <Link to={'/contact-info'} className='headerAuthUser__info'>
                                <div className='headerAuthUser__firstName'>{authState.user.firstName}</div>
                                <div className='headerAuthUser__lastName'>{authState.user.lastName}</div>
                            </Link>

                            <div className='headerAuthUser__logout' onClick={signOut}>Выход</div>
                        </div>}

                    <Link to={'/second'} className='header__basket'><img src={basket} alt="Logo" />
                    {productCount===0?'':<div>{productCount}</div>}</Link>
                </div>

            </div>
        </div>
    )
}

export default Header;
