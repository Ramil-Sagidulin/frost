import Button, {buttonStyle} from "../../ui/button/Button";
import './Product_item.css'
import item_img from './img/Заглушка.png'
import ModalProduct from "../ModalProduct/ModalProduct";
import useModal from "../../hooks/useModal";
import {Link, useParams} from "react-router-dom";

function Product_item(props) {
    const [visible, open, close] = useModal();
    return (
        <div className='item'>
            <img src={item_img} className='item__img'/>
            <Link to={'/info/' + props.item_id} className='item__description'>{props.item_name} ({props.item_id})
            </Link>
            <div className='item__bottom-block'>
                <div className="item__price">{props.item_price} тг.</div>
                <Button buttonStyle={buttonStyle.primary} text={'Купить'} onClick={open}/>
            </div>
            <ModalProduct visibleProd={visible} close={close} product={props.prodObj} modalProduct_count={props.count}/>


        </div>

    )
}

export default Product_item;
