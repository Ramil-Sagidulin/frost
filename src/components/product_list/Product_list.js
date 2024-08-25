import './Product_list.css'
import Product_item from "../product_item/Product_item";
import {useEffect} from "react";
import PageButtons from "../../ui/pageButtons/PageButtons";
import Filter_section from "../filter_section/Filter_section";
import {useDispatch, useSelector} from "react-redux";
import {ChangePage, setModelsState, setFilter,setGenerationsState} from "../../features/filter/filterSlice";
function Product_list() {


    const products = useSelector(state => state.filter.productsPage);
    const pagesState = useSelector(state => state.filter.pages);
    const filter = useSelector(state => state.filter.filter)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setFilter({brandId: undefined, modelId: undefined, generationId: undefined, available: 0}))
        dispatch(setModelsState([{ text: 'Все марки', value: null }]));
        dispatch(setGenerationsState([{text: 'Все поколения', value: null}]))
    },[])

    useEffect(() => {
        dispatch(ChangePage(1, filter));
        
    }, [filter]);

    function PageChange(page) {
        dispatch(ChangePage(page, filter))

    }

    return (
        <div className='wrapper'>
            <Filter_section/>
            <div className='item__list'>
                {products.map(function (prod, index) {
                    return (
                        <Product_item prodObj={prod} item_name={prod.name} item_price={prod.price} item_id={prod.id}
                                      key={index} product={prod.name}/>
                    );
                })}
            </div>
            <PageButtons
                totalPages={pagesState.totalPages}
                currentPage={pagesState.currentPage}
                onPageChange={PageChange}
            />
        </div>
    )
}

export default Product_list;
