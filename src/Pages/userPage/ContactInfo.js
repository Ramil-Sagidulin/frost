import Input from "../../ui/input/Input";
import Button, { buttonStyle } from "../../ui/button/Button";
import './UserPage.css'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function ContactInfo() {
    const authState = useSelector(state => state.auth);
    if (authState.user != null) {
        return (
            <div className='wrapper userPage'>
                <div className='userPage__title'>Личный кабинет</div>
                <div className='userPage__block'>
                    <div className='block__list'>
                        <Link to={'/my-orders'} className='list__item orders-item'>Мои заказы</Link>
                        <Link to={'/contact-info'} className='list__item contactInfo-item active-item'>Контактные данные</Link>
                        <Link to={'/delivery-info'} className='list__item delivery-item'>Доставка</Link>
                    </div>
                    <div className='block__info'>
                        <div className='block__info-title'>Контактные данные</div>
                        <div className='block__info-wrapp'>
                            <div className='block__info-left'>
                                <Input title={'Фамилия'} style={{width:'300px'}} value={authState.user.lastName}/>
                                <Input title={'Имя'}  value={authState.user.firstName}/>
                                <Input title={'Отчество'} />
                            </div>
                            <div className='block__info-right'>
                                <Input title={'E-mail'} value={authState.user.email}/>
                                <Input title={'Телефон'} />
                                <div className='userPage__change-password'>Изменить пароль</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="userPage__btn"><Button buttonStyle={buttonStyle.primary} text={'Сохранить изменения'} /></div>
            </div>
        )
    }else{
        return(<div><div className='loader_title'>Идет загрузка</div><div className='loader'></div></div>);
    }
}
export default ContactInfo;