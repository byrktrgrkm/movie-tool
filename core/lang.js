const {settings} = require('../setting')
const {language} = require(`../lang/${settings.defaultLanguage}`);

module.exports.lang = (key) => {
    if(key.toString().indexOf('.') > -1){
        const list = key.split('.');
        
        let selected = language,i;
        for(i =  0 ; i < list.length ; i++){
            if(Object.hasOwn(selected, list[i])){
                if(i != list.length - 1){
                    selected = selected[list[i]];
                }
            }

            if(i == list.length - 1){
                if(Object.hasOwn(selected, list[i])){
                    return selected[list[i]];
                }else{
                    return '';
                }
            }

        }
        
    }
    if(Object.hasOwn(language,key)){
        return language[key];
    }
    return "";
}


