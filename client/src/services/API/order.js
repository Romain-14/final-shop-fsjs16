import axios from 'axios';



export const getOrders = async (TOKEN) => {
    try {
        return await axios.get("/api/v1/order/all", { headers : {"x-access-token": TOKEN}});        
    } catch (error) {
        return error.response
    }
}