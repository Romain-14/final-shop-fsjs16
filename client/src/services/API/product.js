import axios from 'axios';

export const getProducts = async () => {
    try {
        return await axios.get("/api/v1/product/all");
    } catch (error) {
        return error.response
    }
}

