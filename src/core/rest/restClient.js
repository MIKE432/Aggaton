import axios from 'axios';

export const apiCall = async (url, method, params, body) => {
    return await apiRequest(url, method, params, body)
}

const apiRequest = (url, method = 'GET', params = {}, body = {}) => {
    return axios({ url, method, params, data: body, timeout: 10000 });
};