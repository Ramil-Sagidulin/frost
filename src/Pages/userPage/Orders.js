import Button, {buttonStyle} from "../../ui/button/Button";
import './UserPage.css'
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function Orders() {
    const [ordersCart, setOrdersCart] = useState([]);
    useEffect(() => {
        axios.get('/orders').then(response => {
            setOrdersCart(response.data)
        })
    }, [])
console.log(ordersCart);
    function dateToString(unixTime) {
        let date = new Date(unixTime);
        return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();
    };
    function Price(price){
        let grandTotal=null;
        console.log(price);
        for (const item of price) {
            console.log(item);
            grandTotal=grandTotal+(item.product.price*item.count);
        }
        return grandTotal;
    }

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
                    {ordersCart.map(function (order, index) {
                        return (
                            <div className='orders__product-item'>
                                <div className='order-number' index={order.id}>№{order.id}</div>
                                <div className='orders_nameBlock'>
                                    {order.items.map(function (orderItem) {
                                        return (
                                            <div className='order-name' index={orderItem.product.id}>{orderItem.product.name}
                                            </div>

                                        )
                                    })}
                                </div>
                                <div className='order-date'>{dateToString(order.created_at)}</div>
                                <div className='order-price'>{Price(order.items)}{Price}</div>
                            </div>
                        )
                    })}

                    <div className='line'></div>

                </div>
            </div>
            {/* <div className="userPage__btn"><Button buttonStyle={buttonStyle.primary} text={'Сохранить изменения'}/>
            </div> */}
        </div>
    )
}

export default Orders;