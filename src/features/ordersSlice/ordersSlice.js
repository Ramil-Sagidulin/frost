import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    phone: null,
    orderId:null,
};
const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        setPhone: (state, action) => {
            state.phone = action.payload;
        },
        setOrderId:(state, action)=>{
            state.orderId=action.payload;
        },
    }
})
export const {setPhone,setOrderId} = ordersSlice.actions;
export default ordersSlice.reducer;
