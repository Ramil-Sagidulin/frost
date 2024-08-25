import { createSlice, current } from "@reduxjs/toolkit";
import { getBrands, getModels, getPageProducts, getGenerations } from "./filterAPI";

const initialState = {
    productsPage: [],
    pages: {},
    brands: [{ text: 'Все марки', value: null }],
    models: [{ text: 'Все модели', value: null }],
    generations: [{ text: 'Все поколения', value: null }],
    filter: {
        brandId: undefined,
        modelId: undefined,
        generationId: undefined,
        available: 0,
    },

}
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setProductsPage: (state, action) => {
            state.productsPage = action.payload;
        },
        setPagesState: (state, action) => {
            state.pages = action.payload;
        },
        setBrandsState: (state, action) => {
            state.brands = action.payload;
        },
        setModelsState: (state, action) => {
            state.models = action.payload;
        },
        setGenerationsState: (state, action) => {
            state.generations = action.payload;
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    }

});

export const ChangePage = (page,filter) => (dispatch) => {
    getPageProducts(page,filter)
        .then(response => {
            dispatch(setProductsPage(response.items));
            dispatch(setPagesState(response));
        });
};

export const initializeFilter = () => (dispatch) => {
    getBrands()
        .then(brands => {
            dispatch(setBrandsState([{ text: 'Все марки', value: null }, ...brands.map(item => ({ text: item.name, value: item.id }))]));
        });
};

export const loadModelsByBrand = (brand) => (dispatch) => {
    if(brand===null){
        dispatch(setModelsState(''));
    }else{
    let models = [{ text: 'Все модели', value: null }]
    getModels(brand)
        .then(modelsApi => {
            models.push(...modelsApi.map(item => ({ text: item.name, value: item.id })))
            dispatch(setModelsState(models));
        })}
}

export const loadGenerationsbyModel = (model) => (dispatch) => {
    let generations = [{ text: 'Все поколения', value: null }]
    getGenerations(model)
        .then(generationsApi => {
            generations.push(...generationsApi.map(item => ({ text: item.name, value: item.id })))
            dispatch(setGenerationsState(generations));
        })
}



export const { setProductsPage, setPagesState, setBrandsState, setModelsState, setGenerationsState, setFilter } = filterSlice.actions;

export default filterSlice.reducer;