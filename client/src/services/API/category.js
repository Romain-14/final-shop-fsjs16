import axios from 'axios';

export const getCategories = async () => {
    try {
        return await axios.get("/api/v1/category/all");
    } catch (error) {
        return error.response
    }
}