import './Cart_item.css'
import {increaseCountById, decreaseCountById} from "../../features/cart/cartSlice";
import {useDispatch} from "react-redux";
import {decreaseCartItemCount, increaseCartItemCount} from "../../features/cart/cartAPI";

function CartItem(props) {
    const dispatch=useDispatch();

    function Minus() {
        decreaseCartItemCount(props.item_id)
            .then(()=>{
                dispatch(decreaseCountById(props.item_id));
            })
    }

    function Plus() {
        increaseCartItemCount(props.item_id)
            .then(() => {
                dispatch(increaseCountById(props.item_id));
            })
    }

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