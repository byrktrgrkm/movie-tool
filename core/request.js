const axios = require('axios');

const FormData = require('form-data');


module.exports.request = async (url, method = 'GET' , headers = {}, body = []) => {

    const data = new FormData();

    const config = {
        method: method,
        url: url
    };
    if(['POST','PUT', 'PATCH'].includes(method)){

        if(Array.isArray(body)){
            for(let formItem of body){
                if(formItem.key && formItem.value){
                    data.append(formItem.key, formItem.value);
                }
            }
        }

        config.data = data;
    }

    config.headers =  { 
        ...headers,
        ...data.getHeaders()
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

module.exports.post = async (url, body, headers = {}) => {
    return this.request(url, 'POST', headers, body);
}


module.exports.requestResponseRegex = async (request, regex) => {
    const {data} = await request;

    if(data.length > 0 ){
        const execute = regex.exec(data);

        if(execute && execute[1]){
            return execute[1];
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