import './Cart_item.css'
import {useEffect, useState} from "react";

function CartItem(props) {
    const [numbCount, setNumbCount] = useState(1);

    useEffect(() => {
        props.onChangeCount(numbCount);
    }, [numbCount]);

    function Minus() {
        setNumbCount(function (prevState) {
            let newState = (prevState);
            if (newState !== 1) {
                newState -= 1;
            }
            return newState;
        })

    }

    function Plus() {
        setNumbCount(function (prevState) {
            let newState = (prevState);
            newState += 1;
            return newState;
        })
    }

    return (
        <div>
            <div className='cart-item'>
                <div className='cart__product'>
                    <div className='cart__product-title'>{props.item_name}</div>
                    <div className='cart__product_right'>
                        <div className='cart__product-count'>
                            <div className='btn-minus' onClick={Minus}>-</div>
                            <div className='number-count'>{props.item_count}</div>
                            <div className='btn-plus' onClick={Plus}>+</div>
                        </div>
                        <div className='cart__product-price'>{props.item_price * numbCount + ' тг.'}</div>
                    </div>
                </div>
                <div className='cart__product-footer'>
                    <div className='product-footer__vendorCode'>{props.item_aricul}</div>
                    <div className='product-footer__delProduct' onClick={props.delItem}>Удалить из корзины</div>
                </div>
            </div>
        </div>
    )
}

export default CartItem;