const { settings } = require('../.././setting');
const {language} = require(`../lang/${settings.defaultLanguage}`);

const lang = (key, ...params) => {
    if(key.toString().indexOf('.') > -1){
        const list = key.split('.');
        let selected = language,i;
        for(i =  0 ; i < list.length ; i++){
            if(selected[list[i]]){
                if(i != list.length - 1){
                    selected = selected[list[i]];
                }
            }

            if(i == list.length - 1){
                if(selected[list[i]]){
                    return replace(selected[list[i]],params);
                }else{
                    return key;
                }
            }

        }
        
    }
    if(language[key]){
        return replace(language[key],params);
    }
    return key;
}

const replace = (str,params) => {
    if(params.length == 0) return str;
    
    let newstr = str.replace(/(\{(\d+)\})/g, (match, offset, string) => {
       return params[string] ? params[string]  : ''
    });
  
    return newstr.trim();
}


export {
    lang
}


