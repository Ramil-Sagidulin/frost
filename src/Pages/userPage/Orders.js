import Input from "../../ui/input/Input";
import Button, { buttonStyle } from "../../ui/button/Button";
import './UserPage.css'
import { useContext, useEffect, useLayoutEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
function Orders() {
    const [user, login, logout] = useContext(AuthContext);
    return (
        <div className='wrapper userPage'>
            <div className='userPage__title'>Личный кабинет</div>
            <div className='userPage__block'>
                <div className='block__list'>
                    <Link to={'/my-orders'} className='list__item orders-item active-item'>Мои заказы</Link>
                    <Link to={'/contact-info'} className='list__item contactInfo-item '>Контактные данные</Link>
                    <Link to={'/delivery-info'} className='list__item delivery-item'>Доставка</Link>
                </div>
                <div className='block__info'>
                    <div className='block__info-title'>История заказов</div>
                    <div className='headers'>
                        <div>Номер заказа</div>
                        <div>Наименование товара</div>
                        <div>Дата заказа</div>
                        <div>Стоимость</div>
                    </div>
                    <div className='line'></div>
                    <div className='orders__product-item'>
                        <div className='order-number'>№100001</div>
                        <div className='order-name'>Компрессор кондиционера Hyundai Tucson, Kia Sportage 97701-2E300FD; 0935-03se;  Kia Sportage 97701-2E300FD; 0935-02</div>
                        <div className='order-date'>06.07.2019</div>
                        <div className='order-price'>206 998 тг</div>
                    </div>
                    <div className='line'></div>

                </div>
            </div>
            <div className="userPage__btn"><Button buttonStyle={buttonStyle.primary} text={'Сохранить изменения'} /></div>
        </div>
    )
}
export default Orders;