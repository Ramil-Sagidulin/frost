import {CartAdd} from "./cartAPI";


export const addToCart=(productId, count)=>dispatch=>{
    dispatch(CartAdd(productId, count))

}