import {Link} from "react-router-dom";
import Input from "../../ui/input/Input";
import Button, {buttonStyle} from "../../ui/button/Button";
import './Delivery.css'
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setOrderId} from "../../features/ordersSlice/ordersSlice";
import {sendingOrderData} from "../../features/ordersSlice/orderAPI";
import {setProductCountInCart} from "../../features/cart/cartSlice";

function Delivery() {
    const [area, setAreaSt] = useState('');
    const [city, setCitySt] = useState('');
    const [street, setStreetSt] = useState('');
    const [house, setHouseSt] = useState('');
    const [apartment, setApartmentSt] = useState('');
    const dispatch = useDispatch();
    const ordersState = useSelector(state => state.orders);
    function orderData() {
        sendingOrderData(ordersState.phone,area,city,street,house,apartment)
        .then(response=>{
            dispatch(setOrderId(response));
            dispatch(setProductCountInCart(0));
        })
    }

    return (
        <div className='delivery wrapper'>
            <div className='cart__ordering'>
                <div className='cart__ordering-title'>Оформление заказа</div>
                <div className='cart__ordering-line'>
                    <div>Корзина</div>
                    <div> Контактые данные</div>
                    <div className='cart__blueBtn'>Доставка</div>
                    <div>Завершение</div>
                </div>
            </div>
            <div className='contactDetails__wrapp'>
                <div className='contactDetails__title'>Доставка</div>
                <div className='contactDetails__block'>
                    <div className='contactDetails__block-left'>
                        <div className='block-input__item'>
                            <Input title={'Область'} value={area}
                                   onChange={(event) => (setAreaSt(event.target.value))}/>
                            <Input title={'Город или поселок'} value={city}
                                   onChange={(event) => (setCitySt(event.target.value))}/>
                        </div>
                    </div>
                    <div className='line-vertical'></div>
                    <div className='contactDetails__block-right'>
                        <div className='block-input__item'>
                            <Input title={'Улица'} value={street}
                                   onChange={(event) => (setStreetSt(event.target.value))}/>
                            <div className='address__input-block'>
                                <Input title={'Дом'} value={house}
                                       onChange={(event) => (setHouseSt(event.target.value))}/>
                                <Input title={'Квартира'} value={apartment}
                                       onChange={(event) => (setApartmentSt(event.target.value))}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Link to={'/completion'} className='cart__text-decoration'>
                <div className='contactDetails__button '><Button buttonStyle={buttonStyle.primary}
                                                                 text={'Оформить заказ'} onClick={orderData}/></div>
            </Link>
        </div>
    )
}

export default Delivery;