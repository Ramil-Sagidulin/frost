import Dropdown from "../../ui/dropdown/Dropdown";
import Button, {buttonStyle} from "../../ui/button/Button";
import CartItem from "../cart_item/Cart_item";
import './Cart.css'
import {useEffect, useState} from "react";
import Cart_item from "../cart_item/Cart_item";
import {Link, useParams} from "react-router-dom";
import axios from "axios";
import product_item from "../product_item/Product_item";


function Cart() {
    const [paymants, setPaymants] = useState([{text: 'Выберите способ оплаты'}, {text: 'Наличными при получении'}, {text: 'Оплата картой'}]);
    const [cartProductItems, setCartProductItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        axios.get('https://frost.runtime.kz/api/cart').then(function (res) {
            setCartProductItems(res.data.items)
        })
    }, [])


    function Total() {
        setTotalPrice(0)
        for (let item of cartProductItems) {
            setTotalPrice((prev) => {
                let newState = (prev);
                newState = newState + (item.count * item.product.price);
                return newState;

            })
        }
    }

    useEffect(() => {
        Total();
    }, [cartProductItems])

    function ChangeCount(index, count) {
        setCartProductItems(function (prev) {
            let newState = [...prev];
            newState[index].count = count;
            Total();
            return newState;
        })
    }

    function DelItem(index) {
        axios.get('https://frost.runtime.kz/api/cart/delete?productId=' + cartProductItems[index].product.id )
            .then(() => {
                setCartProductItems(function (prev) {
                    let newState = [...prev];
                    newState.splice(index, 1);
                    return newState;
                })
            });

    }

    if (cartProductItems.length !== 0) {
        return (
            <div className='cart'>
                <div className='wrapper cart__wrapper'>
                    <div className='cart__ordering'>
                        <div className='cart__ordering-title'>Оформление заказа</div>
                        <div className='cart__ordering-line'>
                            <div className='cart__blueBtn'>Корзина</div>
                            <div className='cart__text-decoration'> Контактые данные</div>
                            <div className='cart__text-decoration'>Доставка</div>
                            <div>Завершение</div>
                        </div>
                    </div>
                    <div className='cart__body'>
                        <div className='cart__body-title'>Корзина</div>
                        <div className='cart__body-description'>
                            <div className='cart__body-description_left'>Наименование товара</div>
                            <div className='cart__body-count'>Количество</div>
                            <div className='cart__body-price'>Цена</div>
                        </div>
                        {cartProductItems.map((item, index) => {
                            return (
                                <Cart_item item_id={item.product.id} item_name={item.product.name}
                                           item_price={item.product.price}
                                           item_aricul={item.product.code} item_count={item.count}
                                           key={item.product.id} onChangeCount={function (count) {
                                    ChangeCount(index, count)
                                }} delItem={function () {
                                    DelItem(index)
                                }}/>)
                        })}
                        <div className='cart_payment'>
                            <div className='cart_payment_left'>
                                <div className='cart_payment-title'>Способ оплаты</div>
                                <Dropdown items={paymants}/>
                            </div>
                            <div className='cart_payment_right'>
                                <div className='cart_payment-total'>Итого к оплате:</div>
                                <div className='cart_payment-sum'>{totalPrice}</div>
                            </div>
                        </div>
                    </div>
                    <div className='cart__button'><Link to={'/Contact-details'}><Button
                        buttonStyle={buttonStyle.primary}
                        text={'Оформить заказ'}/></Link>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (<div className='cart_empty'>Корзина пуста</div>)
    }
}

export default Cart;