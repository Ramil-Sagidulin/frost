import axios from "axios";

export const CartAdd = async (productId, count)=> {
    return await axios.get('/api/cart/add', {
        params: {
            productId: productId,
            count: count,
        }
    });

}
