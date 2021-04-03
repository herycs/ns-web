import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'http://www.ym999.wang';


axios.interceptors.request.use((config) => {

    //在发送请求之前做某件事

    if(config.method  === 'post'){

        config.data = qs.stringify(config.data);

    }

    return config;

},(error) =>{

    console.log('错误的传参')

    return Promise.reject(error);

});

axios.interceptors.response.use((res) =>{

    if(!res.data.success){

        return Promise.resolve(res);

    }

    return res;

}, (error) => {

    console.log('网络异常')

    return Promise.reject(error);

});

export function doPost(url, params) {

    return new Promise((resolve, reject) => {

        axios.post(url, params)

            .then(response => {

                resolve(response);

            }, err => {

                reject(err);

            })

            .catch((error) => {

                reject(error)

            })

    })

}

export function doGet(url, param) {

    return new Promise((resolve, reject) => {

        axios.get(url, {params: param})

            .then(response => {

                resolve(response)

            }, err => {

                reject(err)

            })

            .catch((error) => {

                reject(error)

            })

    })

}

export default {

    doPost,

    doGet,

}