import axios from "axios";

export const addToCart = async (productId, numbCount)=> {
    await axios.get('/cart/add', {
        params: {
            productId: productId,
            count: numbCount,
        }
    });
}

export const getCartItems=async ()=>{
    let response = await axios.get('/cart')
    return response.data.items;
}

export const decreaseCartItemCount=async (item_id)=>{
    await axios.get('/cart/decrease?productId='+item_id)
}

export const increaseCartItemCount=async (item_id)=>{
    await axios.get('/cart/increase?productId='+item_id)
}

export const deleteCartItem=async (item_id)=>{
    await axios.get('/cart/delete?productId=' +item_id)
}