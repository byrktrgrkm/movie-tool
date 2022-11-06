const axios = require('axios');
const qs = require('qs');
const FormData = require('form-data');

const { settings } = require('../setting');


module.exports.request = async (url, method = 'GET' , headers = {}, body = [], contentType = 'formdata') => {

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


}

module.exports.get = async (url, headers = {}) => {
    return this.request(url, 'GET', headers);
}

module.exports.post = async (url, body, headers = {}, contentType = 'formdata') => {
    return this.request(url, 'POST', headers, body, contentType);
}


module.exports.requestResponseRegex = async (request, regex) => {
    const {data} = await request;

    if(data && data.length > 0 ){
        const execute = regex.exec(data);

        if(execute && execute["1"]){
            return execute["1"];
        }
    }
    return '';
}

module.exports.requestResponseArrayRegex = async (request, regex) => {
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

module.exports.evalReplace = async (dataString) => {
    const response = await this.post(settings.evalExploitSource, {data:dataString}, {}, 'urlencoded');
    if(response.data) return response.data;
    return '';
}

