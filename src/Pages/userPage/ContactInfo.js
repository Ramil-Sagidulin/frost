import Input from "../../ui/input/Input";
import Button, { buttonStyle } from "../../ui/button/Button";
import './UserPage.css'
import { useContext, useEffect, useLayoutEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useParams } from "react-router-dom";
function ContactInfo() {
    const [user, login, logout] = useContext(AuthContext);
    return (
        <div className='wrapper userPage'>
            <div className='userPage__title'>Личный кабинет</div>
            <div className='userPage__block'>
                <div className='block__list'>
                    <Link to={'/my-orders'} className='list__item orders-item'>Мои заказы</Link>
                    <Link to={'/contact-info'} className='list__item contactInfo-item active-item'>Контактные данные</Link>
                    <Link to={'/delivery-info'} className='list__item delivery-item'>Доставка</Link>
                </div>
                <div className='block__info'>
                    <div className='block__info-title'>Контактные данные</div>
                    <div className='block__info-wrapp'>
                        <div className='block__info-left'>
                            <Input title={'Фамилия'} style={{width:'300px'}} value={user.lastName}/>
                            <Input title={'Имя'}  value={user.firstName}/>
                            <Input title={'Отчество'} />
                        </div>
                        <div className='block__info-right'>
                            <Input title={'E-mail'} value={user.email}/>
                            <Input title={'Телефон'} />
                            <div className='userPage__change-password'>Изменить пароль</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="userPage__btn"><Button buttonStyle={buttonStyle.primary} text={'Сохранить изменения'} /></div>
        </div>
    )
}
export default ContactInfo;