import axios from 'axios';

var api = axios.create({
    baseURL: 'https://izifilmsapi.herokuapp.com/api',
});

var cape_url = "https://izifilmsapi.herokuapp.com/capes/";

export {api, cape_url};