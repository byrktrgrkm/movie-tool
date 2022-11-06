const {hexToUTF8, baseURL, resolutionToHuman} = require('../core/help');
const {requestResponseRegex, requestResponseArrayRegex, request} = require('../core/request');

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
     }
}