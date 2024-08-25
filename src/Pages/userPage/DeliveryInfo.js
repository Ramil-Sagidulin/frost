import Input from "../../ui/input/Input";
import Button, { buttonStyle } from "../../ui/button/Button";
import './UserPage.css'
import { useState } from "react";
import Dropdown from "../../ui/dropdown/Dropdown";
import { Link, useParams } from "react-router-dom";
function DeliveryInfo() {
    const [countries, setCountries] = useState([{ text: 'Республика Казахстан' }, { text: 'Турция' }])
    const [regions, setRegions] = useState([{ text: 'Акмолинская область' }, { text: 'Восточно-Казахстанская область' }])
    return (
        <div className='wrapper userPage'>
            <div className='userPage__title'>Личный кабинет</div>
            <div className='userPage__block'>
                <div className='block__list'>
                    <Link to={'/my-orders'} className='list__item orders-item'>Мои заказы</Link>
                    <Link to={'/contact-info'} className='list__item contactInfo-item '>Контактные данные</Link>
                    <Link to={'/delivery-info'} className='list__item delivery-item active-item'>Доставка</Link>
                </div>
                <div className='block__info'>
                    <div className='block__info-title'>Контактные данные</div>
                    <div className='block__info-wrapp'>
                        <div className='block__info-left'>
                            <div className='dropdown-title'>Страна</div>
                            <Dropdown items={countries} />
                            <div className='dropdown-title'>Регион / Область</div>
                            <Dropdown items={regions} />
                            <Input title={'Город или поселок'} />
                        </div>
                        <div className='block__info-right'>
                            <Input title={'Улица'} />
                            <Input title={'Дом'} />
                            <Input title={'Квартира'} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="userPage__btn"><Button buttonStyle={buttonStyle.primary} text={'Сохранить изменения'} /></div>
        </div>
    )
}
export default DeliveryInfo;