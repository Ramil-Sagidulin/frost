import './ContactDetails.css'
import Input from "../../ui/input/Input";
import Button, {buttonStyle} from "../../ui/button/Button";
import {Link} from "react-router-dom";

function ContactDetails() {
    return (<div className='contactDetails wrapper'>
        <div className='cart__ordering'>
            <div className='cart__ordering-title'>Оформление заказа</div>
            <div className='cart__ordering-line'>
                <div>Корзина</div>
                <div className='cart__blueBtn'>Контактые данные</div>
                <div>Доставка</div>
                <div>Завершение</div>
            </div>
        </div>
        <div className='contactDetails__wrapp'>
            <div className='contactDetails__title'>Контактные данные</div>
            <div className='contactDetails__block'>
                <div className='contactDetails__block-left'>
                    <div className='block-input__item'>
                        <Input title={'Фамилия'}/>
                        <Input title={'Имя'}/>
                        <Input title={'Отчество'}/>
                        <Input title={'Телефон'}/>
                    </div>
                </div>
                <div className='line-vertical'></div>
                <div className='contactDetails__block-right'>
                    <div className='block-input__item'>
                        <Input title={'E-mail'}/>
                        <Input title={'Пароль'}/>
                        <Input title={'Повторите пароль'}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='contactDetails__button'><Link to={'/delivery'}> <Button  buttonStyle={buttonStyle.primary} text={'Подтвердить'}/></Link></div>

    </div>)
}

export default ContactDetails;