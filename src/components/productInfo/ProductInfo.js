import imgItem1 from './img/5003-01.png';
import imgItem2 from './img/5003-02.png';
import imgItem3 from './img/5003-03.png';
import imgItem4 from './img/5003-04.png';
import imgCheck from './img/check.svg';
import imgUnCheck from './img/uncheck.svg';
import './ProductInfo.css';
import Button, {buttonStyle} from "../../ui/button/Button";
import {useEffect, useState} from "react";
import axios from "axios";
import Review_item from "../review_item/Review_item";
import useModal from "../../hooks/useModal";
import ModalProduct from "../ModalProduct/ModalProduct";
import ModalAuthorization from "../modal_authorization/ModalAuthorization";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";

// `/reviews` (POST)
// * `product_id`
// * `review`

function ProductInfo(props) {
    const [productImg, setProductImg] = useState([imgItem1, imgItem2, imgItem3, imgItem4]);
    const [imgBig, setImgBig] = useState(imgItem1);
    const [visible, open, close] = useModal()
    const [visibleLogin, openLogin, closeLogin] = useModal()


    function clickImg(index) {
        setImgBig(function () {
            let newState;
            newState = productImg[index];
            return newState;
        });
    }
    const params = useParams();
    const [productInfo, setProductInfo] = useState({
        id: undefined,
        category: null,
        available: undefined,
        code: undefined,
        manufacturer: undefined,
        description: undefined,
        name: undefined,
        price: undefined,
    });
    const [list1lvl, setList1lvl] = useState([
        {
            name: undefined, selected: false, arr: [
                {
                    name: undefined, selected: false,
                    arr: [{name: undefined,}]
                },

            ]
        },
    ])
    let list3Lvl = 'productInfo__list-lvl3';
    let list2Lvl = 'productInfo__list-lvl2';

    useEffect(() => {
            axios
                .get('https://frost.runtime.kz/api/products/' + params.product_id,)
                .then(response => {
                    let data = response.data;
                    setProductInfo({
                        id: data.id,
                        category: data.category,
                        available: data.available,
                        code: data.code,
                        manufacturer: data.manufacturer,
                        description: data.description,
                        name: data.name,
                        price: data.price,
                    })
                    setList1lvl([{
                            name: data.brand.name,
                            arr: [{name: data.model.name, arr: [{name: data.generation.name},]}],
                        }]
                    )
                })
    }, [])
    function clickList1lvl(index) {
        setList1lvl(function (prev) {
            let newS = [...prev];
            newS[index].selected = !newS[index].selected;
            return newS;
        })
    }

    function clickList2lvl(event, index1, index2) {
        event.stopPropagation();
        setList1lvl(function (prev) {
            let newS = [...prev];
            newS[index1].arr[index2].selected = !newS[index1].arr[index2].selected;
            return newS;
        });
    }



    let productInfo__list_1lvl = 'productInfo__list-1lvl'
    if (productInfo.id===undefined){
        return (
            <div className='timeOut'>Ожидайте идет загрузка...</div>
        )
    }
    else {
    return (
        <div className='productInfo'>
            <div  className='productInfo__wrapper wrapper'>
                <div className='productInfo_left'>
                    <div className='productInfo__gallery_big'>
                        <img src={imgBig} className='gallery__img1B'/>
                    </div>
                    <div className='productInfo__gallery_small'>
                        {productImg.map(function (imgItem, index) {
                            return (<div key={index} onClick={() => clickImg(index)}><img src={imgItem}
                                                                                          className='gallery__imgS'/>
                            </div>)
                        })}
                    </div>
                    <div className='productInfo__list'>
                        <div className='productInfo__list-title'>
                            Применим к автомобилям:
                        </div>
                        <div className='productInfo__list-block'>
                            {list1lvl.map(function (lvl1Item, index1) {
                                return (
                                    <div
                                        className={!lvl1Item.selected ? productInfo__list_1lvl : productInfo__list_1lvl + ' productInfo__list-1lvl-open'}
                                        key={index1}
                                        onClick={() => clickList1lvl(index1)}
                                    >
                                        {lvl1Item.name}
                                        {lvl1Item.arr.map(function (lvl2Item, index2) {
                                            return (
                                                <div
                                                    className={!lvl2Item.selected ? list2Lvl : list2Lvl + ' productInfo__list-lvl2-open'}
                                                    key={index2}
                                                    onClick={(event) => clickList2lvl(event, index1, index2)}
                                                >
                                                    {lvl2Item.name}
                                                    {lvl2Item.arr.map(function (lvl3Item, index3) {
                                                        return (
                                                            <div className={list3Lvl} key={index3}>{lvl3Item.name}</div>
                                                        );
                                                    })}
                                                </div>
                                            );
                                        })}


                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className='productInfo_right'>
                    <div className='productInfo__description'>
                        <div className='productInfo__specification'>
                            <div className='productInfo__title'>
                                {productInfo.name}
                            </div>
                            <div className='productInfo__articul'>
                                <b>Артикул:</b> {productInfo.code}
                            </div>
                            <div className='productInfo__manufacturer'>
                                <b>Производитель:</b> {productInfo.manufacturer}
                            </div>
                            <div className='productInfo__information'><b>Описание:</b> {productInfo.description}
                            </div>
                        </div>
                        <div className='productInfo__priceBlock'>
                            <div className='productInfo__priceBlock-title'>
                                {productInfo.price + ' тг'}
                            </div>
                            <div className='productInfo__priceBlock-check'>
                                <img src={productInfo.available ? imgCheck : imgUnCheck}
                                     className='productInfo__priceBlock-checkImg'/>
                                <div>{productInfo.available ? 'в наличии' : 'нет в наличии'}</div>
                            </div>
                            <div className='productInfo__priceBlock-city'>
                                <div className='productInfo__priceBlock-cityItem'>г. Астана</div>
                                <div className='productInfo__priceBlock-cityItem'>г. Алматы</div>
                            </div>
                            {productInfo.available ?<Button buttonStyle={buttonStyle.primary} text={'Купить'} onClick={open}/>:''}
                        </div>
                    </div>
                    <div className='productInfo__comment'>
                        <div className='comment__title'>Отзывы</div>
                        <Review_item comment={params.product_id}/>
                        <ModalAuthorization visible={visibleLogin} close={closeLogin}/>
                    </div>
                </div>
                <ModalProduct visibleProd={visible} close={close} product={productInfo} modalProduct_count={props.count}/>
            </div>
        </div>
    )}
}

export default ProductInfo;