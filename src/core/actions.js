import {request,requestResponseRegex} from './request'
const {stream} = require('./stream')

const { settings } = require('../../setting');
const {convertData} = require('./help')


const search = async (query) => {
    const response = await request(
        settings.endpoints.query(query)
    );
    return response.data.map(item => {

        let filmTarz = item.tarz;

        if (item.tarz == 'td' && item.partmod == '') {
            filmTarz = 'td'
        } else if (item.tarz == 'ay' && item.partmod == '') {
            filmTarz = 'ta'
        } else if (item.tarz == 'tr' && item.partmod == '') {
            filmTarz = 'tr'
        } else if (item.tarz == 'yk' && item.partmod == '') {
            filmTarz = 'soon';
        } else if (item.partmod == 'v2') {
            filmTarz = 'td_ta';
        }
        return {
            ...item,
            fulllink: `${settings.endpoints.base}/${item.prefix}/${item.dizilink}/`,
            filmTarz 
        }
    });
};

const fragman = async (url) => {
    const regex = /"embedUrl": "([^"]+)"\s+\}/gms;
    const data = await requestResponseRegex(
        request(url),
        regex
    )
    return data;
}

const getAMovie = async (url) => {
    const regex1 = /scx = (.+);/gm;

    const scx = await requestResponseRegex(
        request(url),
        regex1
    );

    const data = convertData( JSON.parse(scx));
    let streamObject,order = 0;

    do{
        if(data.isset(settings.resolutionOrder[order])){
            streamObject = data.get(settings.resolutionOrder[order]);
        }else{
            order++;
        }
    }while(streamObject == null && order < settings.resolutionOrder.length)

    if(streamObject == null){
         console.error('STREAM OBJECT IS NULL');
         return null;
    }

    let movieUrl;

    if(streamObject instanceof Object){
        movieUrl = await stream.get(streamObject.type).getMovieUrl(streamObject.url[Object.keys(streamObject.url)[0]]);
    }else{
        movieUrl = await stream.get(streamObject.type).getMovieUrl(streamObject.url[0]);
    }

    if(!movieUrl){
        console.error("STREAM URL NOT FOUND");
        return null;
    }

    return {streamObject,movieUrl};

};

const getAMovieResolutions = async (url) => {
    
    const o = await getAMovie(url);
    
    if(o == null)
        return [];

    let movieResolutions;
    if(o.streamObject instanceof Object){
        movieResolutions = await stream.get(o.streamObject.type).getResolutions(o.movieUrl);
    }else{
        movieResolutions = await stream.get(o.streamObject.type).getResolutions(o.movieUrl);
    }
    return movieResolutions;
     
}
const getAMovieSource = async (url) => {
    
    const o = await getAMovie(url);
    
    if(o == null)
        return '';
    return o.movieUrl;
     
}



export {
    search,
    fragman,
    getAMovieResolutions,
    getAMovieSource
}