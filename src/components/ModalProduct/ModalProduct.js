import Modal from "../Modal/Modal";
import { useState } from "react";
import { useEffect } from "react";
import './ModalProduct.css'
import Button, { buttonStyle } from "../../ui/button/Button";
import { Link } from "react-router-dom";

function ModalProduct(props) {
    const [openModalProd, setOpenModalProd] = useState(props.visibleProd);
    const [numbCount, setNumbCount] = useState(1);
    useEffect(() => {
        setOpenModalProd(props.visibleProd)
        setNumbCount(1)
    }, [props.visibleProd]);

    function MinusCount() {
        setNumbCount(function (prevState) {
            let newState = (prevState);
            if (newState !== 1) {
                newState -= 1;
            }
            return newState;
        })

    }

    function PlusCount() {
        setNumbCount(function (prevState) {
            let newState = (prevState);
            newState += 1;
            return newState;
        })
    }

    return (
        <Modal visible={openModalProd} close={props.close}>
            <div className='modal-product'>
                <div className='modal-product__title'>Товар добавлен в корзину</div>
                <div className='modal-product__name'>{props.product}</div>
                <div className='modal-product__count'>
                    <div className='modal-product__count-title'>Укажите количество: </div>
                    <div className='modal-product__count-btn'>
                        <div className='product__btn-minus' onClick={MinusCount}>-</div>
                        <div className='product__number-count'>{numbCount}</div>
                        <div className='product__btn-plus' onClick={PlusCount}>+</div>
                    </div>
                </div>
                <Link to={'/second'}><Button style={{ marginTop: '20px', width: '100%' }} buttonStyle={buttonStyle.primary} text={'Оформить заказ'}  /></Link>
                <div className='modal-product__close' onClick={props.close}>Продолжить выбор товаров</div>
            </div>
        </Modal>

    )
}

export default ModalProduct;