import {Link} from "react-router-dom";
import './Completion.css'
function Completion(){
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
                    <div className='completion__block-item'>image</div>
                    <div className='completion__block-item'>info</div>
                    <div className='completion__block-item'>link</div>
                </div>
            </div>
        </div>
    )
}
export default Completion;