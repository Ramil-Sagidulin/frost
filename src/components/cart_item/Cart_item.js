import './Cart_item.css'
import {useEffect, useState} from "react";
import axios from "axios";

function CartItem(props) {
    const [numbCount, setNumbCount] = useState(props.item_count);
    useEffect(() => {
        props.onChangeCount(numbCount);
    }, [numbCount]);

    function Minus() {
        axios.get('https://frost.runtime.kz/api/cart/decrease?productId=', {
            params: {
                productId: props.item_id,
            },
        })
            .then(()=>{
                setNumbCount(function (prevState) {
                    let newState = (prevState);
                    if (newState !== 1) {
                        newState -= 1;
                    }
                    return newState;
                })
            })

    }

    console.log('--- props ---');
    console.log(props);

    function Plus() {
        axios.get('https://frost.runtime.kz/api/cart/increase?productId=', {
            params: {
                productId: props.item_id,
            },
        })
            .then(() => {
                setNumbCount(function (prevState) {
                    let newState = (prevState);
                    newState += 1;
                    return newState;
                })
            })

    }

    console.log(props.count)
    return (
        <div>
            <div className='cart-item'>
                <div className='cart__product'>
                    <div className='cart__product-title'>{props.item_name}</div>
                    <div className='cart__product-count'>
                        <div className='btn-minus' onClick={Minus}>-</div>
                        <div className='number-count'>{props.item_count}</div>
                        <div className='btn-plus' onClick={Plus}>+</div>
                    </div>
                    <div className='cart__product-price'>{props.item_price * props.item_count + ' тг.'}</div>
                </div>
                <div className='cart__product-footer'>
                    <div className='product-footer__vendorCode'>{props.code}</div>
                    <div className='product-footer__delProduct' onClick={props.delItem}>Удалить из корзины</div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;