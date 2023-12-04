import Dropdown from "../../ui/dropdown/Dropdown";
import './Filter_section.css'
import Checkbox from "../../ui/checkbox/Checkbox";
import {useEffect, useState} from "react";
import axios from "axios";

function Filter_section(props) {
    const [categories, setCategories] = useState([{text: 'Все категории', value: null}]);


    const [brands, setBrands] = useState([{text: 'Все марки', value: null}]);


    const [models, setModels] = useState([{text: 'Все модели', value: null}])


    const [generations, setGenerations] = useState([{text: 'Все поколения', value: null}])

    const [filterParams, setFilterParams] = useState({
        brandId: null,
        modelId: null,
        generationId: null,
        available: null,
    })

    useEffect(() => {

        axios
            .get('https://frost.runtime.kz/api/categories')
            .then(response => {
                let data = response.data;
                setCategories([...categories, ...data.map(item => ({text: item.name, value: item.id}))]);
            });
        axios
            .get('https://frost.runtime.kz/api/brands')
            .then(response => {
                let data = response.data;
                setBrands([...brands, ...data.map(item => ({text: item.name, value: item.id}))]);
            })
    }, []);

    function addModels(brand) {
        setGenerations([{text: 'Все поколения', value: null}])
        let models = [{text: 'Все модели', value: null}]
        console.log('______model' + brand)
        if (brand === null) {
            setFilterParams({brandId: undefined, modelId: undefined, generationId: undefined});
        } else {
            setFilterParams({...filterParams, brandId: brand, modelId: undefined, generationId: undefined});
            axios
                .get('https://frost.runtime.kz/api/models', {
                    params: {
                        brandId: brand,
                    }
                })
                .then(response => {
                    let data = response.data;
                    models.push(...data.map(item => ({
                        text: item.name,
                        value: item.id
                    })));
                });
        }

        setModels(models);
    }


    function addGenerations(model) {
        let generations = [{text: 'Все поколения', value: null}];
        if (model === null) {
            setFilterParams({...filterParams, modelId: undefined, generationId: undefined});
        } else {
            setFilterParams({...filterParams, modelId: model, generationId: undefined});
            axios
                .get('https://frost.runtime.kz/api/generations', {
                    params: {
                        modelId: model,
                    }
                })
                .then(response => {
                    let data = response.data;
                    generations.push(...data.map(item => ({
                        text: item.name,
                        value: item.id
                    })));
                })
        }
        setGenerations(generations);
    }

    function Generations(generation) {
        setFilterParams({...filterParams, generationId: generation});
    }

    useEffect(() => {
        props.onFilterChange(filterParams);
    }, [filterParams])


    function availableItems(checked) {
        setFilterParams({...filterParams, available: checked});
    }

    return (
        <div className='filter_section'>
            <div className='wrapper'>
                <div className='filter_section__wrapper'>
                    <div className='filter_section__line1'>
                        <div className='filter_section__category'>
                            <div className='filter_section__text'>Категория</div>
                            <Dropdown items={categories}/>
                        </div>
                        <div className='filter_section__brand'>
                            <div className='filter_section__text'>Марка</div>
                            <Dropdown items={brands} onChange={addModels}/>
                        </div>
                        <div className='filter_section__checkbox'><Checkbox availableItems={availableItems}/>
                            <div className='filter_section__text in-stock'>в наличии</div>
                        </div>
                    </div>
                    <div className='filter_section__line2'>
                        <div className='filter_section__model'>
                            <div className='filter_section__text'>Модель</div>
                            <Dropdown items={models} onChange={addGenerations}/>
                        </div>
                        <div className='filter_section__generation'>
                            <div className='filter_section__text'>Поколение</div>
                            <Dropdown items={generations} onChange={Generations}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter_section;
