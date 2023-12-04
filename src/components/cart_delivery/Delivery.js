import {Link} from "react-router-dom";
import Input from "../../ui/input/Input";
import Button, {buttonStyle} from "../../ui/button/Button";
import './Delivery.css'
function Delivery(){
    return(
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
                            <Input title={'Область'}/>
                            <Input title={'Город или поселок'}/>
                        </div>
                    </div>
                    <div className='line-vertical'></div>
                    <div className='contactDetails__block-right'>
                        <div className='block-input__item'>
                            <Input title={'Улица'}/>
                            <div className='address__input-block'>
                                <Input title={'Дом'}/>
                                <Input title={'Квартира'}/>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Link to={'/completion'} className='cart__text-decoration'> <div className='contactDetails__button '><Button  buttonStyle={buttonStyle.primary} text={'Оформить заказ'}/></div></Link>
        </div>
    )
}
export default Delivery;