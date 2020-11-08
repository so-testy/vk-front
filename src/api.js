import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api/v1';

export const getUser = async userId => {
    return axios.get(`/users/${userId}`);
};
