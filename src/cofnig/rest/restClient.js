import axios from 'axios';

export const apiRequest = async (url, method = 'GET', params = {}, body = {}) => {
    
    return await axios({url, method, params, body});
};