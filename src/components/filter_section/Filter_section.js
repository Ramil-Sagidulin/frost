import Dropdown from "../../ui/dropdown/Dropdown";
import './Filter_section.css'
import Checkbox from "../../ui/checkbox/Checkbox";
import {useEffect, useState} from "react";
import {
    initializeFilter,
    loadGenerationsbyModel,
    loadModelsByBrand,
    setFilter,
    setGenerationsState,
    setModelsState
} from "../../features/filter/filterSlice";
import {useDispatch, useSelector} from "react-redux";

function Filter_section(props) {
    const brands = useSelector(state => state.filter.brands);
    const models = useSelector(state => state.filter.models);
    const generations = useSelector(state => state.filter.generations);
    const [categories, setCategories] = useState([{text: 'Все категории', value: null}]);
    const filter = useSelector(state => state.filter.filter);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeFilter());
    }, []);

    function addModels(brand) {
        dispatch(setModelsState([{text: 'Все модели', value: null}]))
        dispatch(setGenerationsState([{text: 'Все поколения', value: null}]))
        if (brand === null) {
            dispatch(setFilter({brandId: undefined, modelId: undefined, generationId: undefined}));
        } else {
            dispatch(setFilter({brandId: brand, modelId: undefined, generationId: undefined}));
            dispatch(loadModelsByBrand(brand));
        }
    }

    function addGenerations(model) {

        dispatch(setGenerationsState([{text: 'Все поколения', value: null}]))
        if (model === null) {
            dispatch(setFilter({...filter, modelId: undefined, generationId: undefined}));
        } else {
            dispatch(setFilter({...filter, modelId: model, generationId: undefined}));
            dispatch(loadGenerationsbyModel(model))
        }
    }

    function Generations(generation) {
        if (generation === null) {
            dispatch(setFilter({...filter, generationId: undefined}));
        } else {
            dispatch(setFilter({...filter, generationId: generation}));
        }
    }


    function availableItems(checked) {
        dispatch(setFilter({...filter, available: checked}));
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
