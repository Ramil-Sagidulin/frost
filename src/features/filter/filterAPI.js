import axios from "axios";

export const getPageProducts = async (page, filter) => {
    let response = await axios.get('/products', {
        params: {
            page: page,
            size: 6,
            brandId: filter.brandId === undefined ? null : filter.brandId,
            modelId: filter.modelId === undefined ? null : filter.modelId,
            generationId: filter.generationId === undefined ? null : filter.generationId,
            available: filter.available,
        }
    })
    return response.data;
}

export const getBrands = async () => {
    let response = await axios.get('/brands');
    return response.data;
}
export const getModels = async (brand) => {
    let response = await axios.get('/models', {
        params: {
            brandId: brand,
        }
    });
    return response.data;
}
export const getGenerations = async (model) => {
    let response = await axios.get('/generations', {
        params: {
            modelId: model,
        }
    });
    return response.data;
}