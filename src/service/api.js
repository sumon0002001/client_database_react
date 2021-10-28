import axios from 'axios';

const baseURL = "http://localhost:3003/users";

export const getUsers = async () => {
    return await axios.get(baseURL);
}