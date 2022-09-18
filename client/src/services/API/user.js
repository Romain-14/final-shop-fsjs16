import axios from 'axios';

export const getUser = async (TOKEN) => {
    try {
        return await axios.get("/api/v1/user/checktoken", { headers : {"x-access-token": TOKEN}});        
    } catch (error) {
        return error.response
    }
}

export const getUsers = async (TOKEN) => {
    try {
        return await axios.get("/api/v1/user/all", { headers : {"x-access-token": TOKEN}});        
    } catch (error) {
        return error.response
    }
}

export const signup = async (datas) => {
    try {
        return await axios.post("/api/v1/user/create", datas);
    } catch (error) {
        console.log(error)
        return error.response
    }
}
export const signin = async (datas) => {
    try {
        return await axios.post("/api/v1/user/signin", datas);
    } catch (error) {
        return error.response
    }
}

export const validateAccount = async (datas) => {
    try {
        return await axios.patch(`/api/v1/user/validateAccount/${datas.uuid}`, {datas});
    } catch (error) {
        return error.response
    }
}

export const update = async (datas, TOKEN) => {
    try {
        return await axios.patch(`/api/v1/user`, {datas}, {headers: {"x-access-token": TOKEN}});
    } catch (error) {
        return error.response
    }
}