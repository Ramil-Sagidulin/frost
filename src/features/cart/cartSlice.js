import {createSlice} from "@reduxjs/toolkit";
import {getCartItems} from "./cartAPI";


const initialState = {
    cartItem: [],
    productCount:undefined,
};
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCartItem: (state, action) => {
            state.cartItem = action.payload;
        },
        increaseCountById: (state, action) => {
            for (const item of state.cartItem) {
                if (item.product.id === action.payload) {
                    item.count++;
                }
            }
        },
        decreaseCountById:(state,action)=>{
            for (const item of state.cartItem) {
                if (item.product.id === action.payload) {
                    item.count--;
                }
            }
        },
        deleteItem:(state,action)=>{
            for (const item of state.cartItem) {
                if(item.product.id===action.payload){
                    state.cartItem.splice(item, 1);
                }
            }
        },
        setProductCountInCart:(state,action)=>{
            state.productCount=action.payload;
        }
    }
});
export const CheckCartItems = () => (dispatch) => {
    getCartItems()
        .then(Item => {
            dispatch(setCartItem(Item));
        })
}


export const {setCartItem, increaseCountById,decreaseCountById,deleteItem,setProductCountInCart} = cartSlice.actions;
export default cartSlice.reducer;
