import axios from "axios";

export const sendingOrderData = async (phone, area, city, street, house, apartment) => {
    let response = await axios.post('/orders', { phone, area, city, street, house, apartment });
    return response.data;
}