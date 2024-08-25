import './ContactDetails.css'
import Input from "../../ui/input/Input";
import Button, {buttonStyle} from "../../ui/button/Button";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {setPhone} from "../../features/ordersSlice/ordersSlice";

function ContactDetails() {
    const dispatch = useDispatch();


    const [phoneNumber, setPhoneNumber] = useState('')
    const authState = useSelector(state => state.auth.user);
    function phoneRecording() {
        dispatch(setPhone(phoneNumber));
    }

    if (authState != null) {
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
                            <Input title={'Фамилия'} defaultValue={authState.lastName}/>
                            <Input title={'Имя'} defaultValue={authState.firstName}/>
                        </div>
                    </div>
                    <div className='line-vertical'></div>
                    <div className='contactDetails__block-right'>
                        <div className='block-input__item'>
                            <Input title={'E-mail'} defaultValue={authState.email}/>
                            <Input title={'Телефон'} value={phoneNumber}
                                   onChange={(event) => setPhoneNumber(event.target.value)}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contactDetails__button'><Link to={'/delivery'}> <Button buttonStyle={buttonStyle.primary}
                                                                                    text={'Подтвердить'}
                                                                                    onClick={phoneRecording}/></Link>
            </div>

        </div>)
    } else {
        return (<div>
            <div className='loader_title'>Идет загрузка</div>
            <div className='loader'></div>
        </div>);
    }
}

export default ContactDetails;