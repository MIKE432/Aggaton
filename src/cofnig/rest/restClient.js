import axios from 'axios';

export const apiRequest = async (url, method = 'GET', params = {}, body = {}) => {
    const response = await axios({url, method, params, body});
    return response;
};