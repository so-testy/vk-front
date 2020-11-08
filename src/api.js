import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080/api/v1';

export const getUser = async userId => {
    return axios.get(`/users/${userId}`);
};

export const getCourses = async () => {
    return axios.get('/courses');
}

export const getCourse = async (id) => {
    return axios.get(`/courses/${id}`);
}