import './Product_list.css'
import Product_item from "../product_item/Product_item";
import {useEffect, useState} from "react";
import axios from "axios";
import PageButtons from "../../ui/pageButtons/PageButtons";
import Filter_section from "../filter_section/Filter_section";

function Product_list(props) {




    const [prodList, setProdList] = useState([]);
    const [pages, setPages] = useState({currentPage: 0, totalPages: 0,})
    const [filter, setFilter] = useState({
        brandId: undefined,
        modelId: undefined,
        generationId: undefined,
        available: false,
    })

    useEffect(() => {
        axios
            .get('https://frost.runtime.kz/api/products', {
                params: {
                    page: 1,
                    size: 6,
                    brandId: filter.brandId ,
                    modelId: filter.modelId ,
                    generationId: filter.generationId ,
                    available: filter.available,
                }
            })
            .then(response => {
                let data = response.data;
                setProdList(data.items);
                setPages({currentPage: data.currentPage, itemsPerPage: data.itemsPerPage, totalPages: data.totalPages})
            });
    }, [filter]);

    function PageChange(page) {
        axios
            .get('https://frost.runtime.kz/api/products', {
                params: {
                    page: page,
                    size: 6,
                    brandId: filter.brandId === 0 ? null : filter.brandId,
                    modelId: filter.modelId === 0 ? null : filter.modelId,
                    generationId: filter.generationId === 0 ? null : filter.generationId,
                    available: filter.available,
                }
            })
            .then(response => {
                let data = response.data;
                setProdList(data.items);
                setPages({currentPage: data.currentPage, totalPages: data.totalPages})
            });
    }
    return (
        <div className='wrapper'>
            <Filter_section onFilterChange={function (filterParams) {
                setFilter(filterParams);
            }}/>
            <div className='item__list'>
                {prodList.map(function (prod, index) {
                    return (
                        <Product_item prodObj={prod} item_name={prod.name} item_price={prod.price} item_id={prod.id} key={index} product={prod.name} />
                    );
                })}
            </div>
            <PageButtons
                totalPages={pages.totalPages}
                currentPage={pages.currentPage}
                onPageChange={PageChange}
            />
        </div>
    )
}

export default Product_list;
