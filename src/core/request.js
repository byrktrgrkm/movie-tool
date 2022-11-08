import axios, * as x11 from 'axios'
import qs from 'qs';
import FormData from 'form-data';

const { settings } = require('../.././setting');



const request = async (url, method = 'GET' , headers = {}, body = [], contentType = 'formdata') => {

    let data = null;

    const config = {
        method: method,
        url: url,
        headers:{}
    };

    if(['POST','PUT', 'PATCH'].includes(method)){

        switch(contentType){
            case 'formdata':
                data = new FormData();

                if(Array.isArray(body)){
                    for(let formItem of body){
                        if(formItem.key && formItem.value){
                            data.append(formItem.key, formItem.value);
                        }
                    }
                }

                config.headers = {
                    ...config.headers,
                    ...data.getHeaders()
                }
            break;

            case 'urlencoded':
                config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                data = qs.stringify(body);
            break;
        }
        config.data = data;
    }

    config.headers =  { 
        ...config.headers,
        ...headers
    };
 
    
    return axios(config)
    .then( 
        ({status, data}) => {
            return {
                status,
                data
            }
        }

    ).catch(err => {
        if(err.code == 'ERR_INVALID_URL'){
            return {
                status: 0,
                message: 'Geçerli url giriniz'
            }
        }
        const {status, data} = err.response;
        return {
            status,
            data
        }
    });

    return null;

}

const get = async (url, headers = {}) => {
    return request(url, 'GET', headers);
}

const post = async (url, body, headers = {}, contentType = 'formdata') => {
    return request(url, 'POST', headers, body, contentType);
}


const requestResponseRegex = async (request, regex) => {
    const {data} = await request;

    if(data && data.length > 0 ){
        const execute = regex.exec(data);
        
        if(execute && execute["1"]){
            return execute["1"];
        }
    }
    return '';
}

const requestResponseArrayRegex = async (request, regex) => {
    const {data} = await request;

    let m, result = [];

    while ((m = regex.exec(data)) !== null) {
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        result.push(
            m
            .filter((m,index) => index !== 0)
        );

    }

    return result
}

const evalReplace = async (dataString) => {
    const response = await post(settings.evalExploitSource, {data:dataString}, {}, 'urlencoded');
    if(response.data) return response.data;
    return '';
}



export {
    request,
    get,
    post,
    requestResponseRegex,
    requestResponseArrayRegex,
    evalReplace
}
