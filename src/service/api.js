import axios from 'axios';

const baseURL = "http://localhost:3003/users";

export const getUsers = async (id) => {
    id = id || "";
    return await axios.get(`${baseURL}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(baseURL, user)
}