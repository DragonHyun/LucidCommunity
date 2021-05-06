import axios from 'axios'

const DOMAIN = 'https://5000-lime-hornet-39gt8nvs.ws-us03.gitpod.io/';
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