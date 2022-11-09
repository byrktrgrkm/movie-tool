const { settings } = require('../../setting');

const secondToHumanTime = ( lang, second ) => {
    second = Math.floor(second);
    let saat = 60 * 60;
    let dakika = 60;
  
    if(second >= saat){
      let saatkaldi = Math.floor(second / saat);
      second = second - (saatkaldi * saat);
      let dakikakaldi = Math.floor(second / dakika);
      second = second - (dakika * dakikakaldi);
      return lang("system.time.hour", second,dakikakaldi,saatkaldi);
    
    }else if(second >= dakika){

      let dakikakaldi = Math.floor(second / dakika);
      second = second - (dakika * dakikakaldi);
      return lang("system.time.minute",second,dakikakaldi);
    
    }

    return lang("system.time.second",second);
}


const languages = settings.allowedLanguages;


export {
    languages,
    secondToHumanTime
}