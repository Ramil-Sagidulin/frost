import Input from "../../ui/input/Input";
import './UserPage.css'
function UserPage(){
    return(
        <div className='wrapper'>
            <div className='userPage__title'>Личный кабинет</div>
            <div className='userPage__block'>
                <div className='block__list'>
                    <div className='list__item'>Мои заказы</div>
                    <div className='list__item'>Контактные данные</div>
                    <div className='list__item'>Доставка</div>
                </div>
                <div className='block__info'>
                    <div className='block__info-title'>Контактные данные</div>
                    <div className='block__info-wrapp'>
                        <div className='block__info-left'>
                            <Input title={'Фамилия'}/>
                            <Input title={'Имя'}/>
                            <Input title={'Отчество'}/>
                        </div>
                        <div className='block__info-right'>
                            <Input title={'E-mail'}/>
                            <Input title={'Телефон'}/>
                            <div className='userPage__change-password'>Изменить пароль</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UserPage;