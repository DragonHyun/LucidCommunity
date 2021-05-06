import axios from 'axios'

const DOMAIN = '132.226.22.227:5000';
axios.defaults.withCredentials = true;

export const request = (method, url, data) => {
    return axios({
        method,
        url: DOMAIN + url,
        data,
    })
        .then((res) => res.data)
        .catch((err) => console.log(err));
};