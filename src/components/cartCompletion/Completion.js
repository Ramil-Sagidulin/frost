import { useSelector } from "react-redux";
import {Link} from "react-router-dom";
import './Completion.css';
import orderConfirmedImg from './img/Group.svg';

function Completion(){
    const orderState = useSelector(state=>state.orders);
    return(
        <div className='completion wrapper'>
            <div className='cart__ordering'>
                <div className='cart__ordering-title'>Оформление заказа</div>
                <div className='cart__ordering-line'>
                    <Link to={'/second'} className='cart__text-decoration'><div>Корзина</div></Link>
                    <Link to={'/Contact-details'} className='cart__text-decoration'><div> Контактые данные</div></Link>
                    <Link to={'/delivery'} className='cart__text-decoration'><div className='cart__blueBtn'>Доставка</div></Link>
                    <div>Завершение</div>
                </div>
            </div>
            <div className='completion__wrapp'>
                <div className='contactDetails__title'>Заказ успешно создан</div>
                <div className='completion__block'>
                    <div className='completion__block-item'><img src={orderConfirmedImg}/></div>
                    <div className='completion__block-item'>Заказ №{orderState.orderId} был создан. Вы можете просмотреть список всех ваших заказов в личном кабинете.</div>
                    <Link to={'/my-orders'} className='completion__block-item-link'>Перейти в личный кабинет</Link>
                </div>
            </div>
        </div>
    )
}
export default Completion;