

const {hexToUTF8,baseURL,convertData} = require('../core/help');
const {requestResponseRegex,requestResponseArrayRegex, request} = require('../core/request');
const {stream} = require('../core/stream');

var beautify = require('js-beautify').js;

(async function getAMovieAtomPlayer(){

   
    const regex1 = /scx = (.+);/gm;

    const scx = await requestResponseRegex(
        request("https://www.fullhdfilmizlesene.pw/film/asiri-doz-overdose/"),
        regex1
    );

    const k = convertData( JSON.parse(scx));
    
    if(k.isset('Atom')){
       let urls =  k.get('Atom');
       let x = await stream.atom.getMovieUrl(urls[0]);
       console.log(x);

       let f = await stream.atom.getResolutions(x);

       console.log(f);
    }

   
});


(async function getAMovieFastPlayer(){

   
    const regex1 = /scx = (.+);/gm;

    const scx = await requestResponseRegex(
        request("https://www.fullhdfilmizlesene.pw/film/yenilmezler-1-izle-fh-fhd4/"),
        regex1
    );

    const k = convertData( JSON.parse(scx));
    
    if(k.isset('Fast')){
       let urls =  k.get('Fast');
       console.log(urls)
     
       let url = await stream.fast.getMovieUrl(urls.tr);

      const resources = await stream.fast.getResolutions(url);
       
    }

   
});


(async function getAMovieProtonPlayer(){

   
    const regex1 = /scx = (.+);/gm;

    const scx = await requestResponseRegex(
        request("https://www.fullhdfilmizlesene.pw/film/benjamin-buttonun-tuhaf-hikayesi-izle-fhd3/"),
        regex1
    );

    const k = convertData( JSON.parse(scx));
    
    
    let urls =  k.get('Turbo');
    let x = await stream.get('Turbo').getMovieUrl(urls[0]);
    console.log(x);
    console.log(urls);

    let f = await stream.get('Turbo').getResolutions(x);

    console.log(f);
     
   
})();
