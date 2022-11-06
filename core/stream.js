const {hexToUTF8, baseURL, resolutionToHuman, regexToData} = require('../core/help');
const {requestResponseRegex, requestResponseArrayRegex, request, evalReplace} = require('../core/request');

module.exports.stream = {
     atom: {
        getMovieUrl: async function(atomUrl){
            const regex = /sources = \[\{\s*"default": true,\s*"file": "([^\s]+)"/gm;

            const data = await requestResponseRegex(
                request(atomUrl),
                regex
            );
            return hexToUTF8(data);
        },
        getResolutions: async function(url){
            const base = baseURL(url);

            const regex = /#EXT-X-I-FRAME-STREAM-.+RESOLUTION=([\dx]+).+URI="(.*)"/gm;

            const data = await requestResponseArrayRegex(
                request(url),
                regex
            );
            
                
            return data.map(item => {
                return {
                    resolution: item[0],
                    uri: item[1],
                    url: [
                        base,
                        item[1]
                    ].join(''),
                    human: resolutionToHuman(item[0])
                };
            });
            
    
        }
     },
     fast : {
        getMovieUrl: async function(fastUrl){
            const regex = /(eval\(.+;)\s*var played = 0;/gm;
            const evalString = await requestResponseRegex(
                request(fastUrl),
                regex
            );
            const evalStringReplaced = await evalReplace(evalString);
            
            const urlReplace = regexToData(evalStringReplaced, /sources = \[\{\s*"default": true,\s*"file": "([^\s]+)"/gm);
            const url = hexToUTF8(urlReplace);
            return url;
        },
        getResolutions: async function(url){
            const base = baseURL(url);

            const regex = /#EXT-X-STREAM-INF:PROGRAM-ID=\d,.+RESOLUTION=([\dx]+)\s(.+)/gm;

            const data = await requestResponseArrayRegex(
                request(url),
                regex
            );
            
                
            return data.map(item => {
                return {
                    resolution: item[0],
                    uri: item[1],
                    url: [
                        base,
                        item[1]
                    ].join(''),
                    human: resolutionToHuman(item[0])
                };
            });
    
        }
        
     }
}