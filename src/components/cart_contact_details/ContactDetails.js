import Header from "../header/Header";
import Footer from "../footer/Footer";
import './ContactDetails.css'
import Input from "../../ui/input/Input";
import Button, {buttonStyle} from "../../ui/button/Button";

function ContactDetails() {
    return (<div className='contactDetails wrapper'>
        <div className='cart__ordering'>
            <div className='cart__ordering-title'>Оформление заказа</div>
            <div className='cart__ordering-line'>
                <div>Корзина</div>
                <div className='cart__basket'>Контактые данные</div>
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
                <div className='line'></div>
                <div className='contactDetails__block-right'>
                    <div className='block-input__item'>
                        <Input title={'E-mail'}/>
                        <Input title={'Пароль'}/>
                        <Input title={'Повторите пароль'}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='contactDetails__button'><Button  buttonStyle={buttonStyle.primary} text={'Подтвердить'}/></div>

    </div>)
}

export default ContactDetails;