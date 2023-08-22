import './Header.css'
import logo from "./img/Frost logo.svg";
import basket from "./img/basket.svg";
import Modal from "../Modal/Modal";
import Input from "../../ui/input/Input";
import Button, {buttonStyle} from "../../ui/button/Button";
import useModal from "../../hooks/useModal";
import ModalAuthorization from "../modal_authorization/ModalAuthorization";
import {Link} from "react-router-dom";

function Header() {

    const [visibleLogin, openLogin, closeLogin] = useModal()
    const [visibleRegistration, openRegistration, closeRegistration] = useModal()

    return (
        <div className='header'>
            <div className='wrapper'>
                <ModalAuthorization visible={visibleLogin} close={closeLogin}/>
                <Modal visible={visibleRegistration} close={closeRegistration}>
                    <div className='modal__title'>Создание учётной записи</div>
                    <div className='modal__name'>
                        <Input placeholder={'Имя'}/>
                        <Input placeholder={'Фамилия'}/>
                    </div>
                    <Input placeholder={'Адрес электронной почты'}/>
                    <Input placeholder={'Пароль'}/>
                    <Input placeholder={'Повторите пароль'}/>
                    <Button style={{marginTop: '50px', fontWeight: '400'}} buttonStyle={buttonStyle.primary}
                            text={'Зарегистрироваться'}/>
                    <div className='modal__link gray'>Войти в существующую учётную запись</div>
                </Modal>
                <div className='header__wrapper'>
                    <Link to={'/'} className='header__logo'> <img src={logo} alt="Logo"/></Link>
                    <div className='header__city'>
                        <div>г.Астана</div>
                        <div>г.Алматы</div>
                    </div>
                    <div className='header__phone'>
                        <div>8-777-777-77-77</div>
                        <div>8-777-777-77-77</div>
                    </div>
                    <div className='header__search'>
                        <input className='header__search-form' placeholder='Поиск по каталогу...'/>
                    </div>
                    <div className='header__authorization'>
                        <div className='header__log-in authorization' onClick={openLogin}>Вход в личный
                            кабинет</div>
                        <div className='header__register authorization'
                           onClick={openRegistration}>Зарегистрироваться</div>
                    </div>
                   <Link to={'/second'} className='header__basket'><img src={basket} alt="Logo"/></Link>
                </div>

            </div>
        </div>
    )
}

export default Header;
