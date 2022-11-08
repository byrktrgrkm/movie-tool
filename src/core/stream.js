const fs = require('fs');
const m3u8stream = require('m3u8stream');
const {hexToUTF8, baseURL, resolutionToHuman, regexToData} = require('../core/help');
const {requestResponseRegex, requestResponseArrayRegex, request, evalReplace} = require('../core/request');

module.exports.stream = {
     list:{
          Group1:["Atom","Proton"],
          Group2:['Fast', 'Fastly'],
          Group3:['Turbo']
     },
     Group1: {
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
     Group2 : {
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
        
     },
     Group3: {
        getMovieUrl: async function(turboUrl){
            try{
                const regex = /data-config='(.*)'/gm;

                const data = await requestResponseRegex(
                    request(turboUrl),
                    regex
                );

                let hls = JSON.parse(data).hls;
                if(hls.substr(0,4) != 'http' ){
                    hls = "https:".concat(hls);
                }
                return hls;
            }catch{
                return '';
            }
        },
        getResolutions: async function(url){
            const regex = /#EXT-X-STREAM-INF:.+RESOLUTION=([\dx]+)\s(.+)/gm;

            const data = await requestResponseArrayRegex(
                request(url),
                regex
            );

            const base = url.substr(0,url.lastIndexOf('/'));

            return data.map(item => {
                return {
                    resolution: item[0],
                    uri: item[1],
                    url: [
                        base,
                        item[1].substr(1)
                    ].join(''),
                    human: resolutionToHuman(item[0])
                };
            });


            
        }
     },
     get: (streamName) =>{
        if(streamName == undefined){
            console.error(`streamName field undefined`);
            return;
        }
        const find = Object.keys(this.stream.list)
                    .find(item => 
                        this.stream.list[item]
                        .map(i => i.toLowerCase())
                        .includes(
                            streamName.toLowerCase()
                        )
                    );
        if(find)
            return this.stream[find];   
        if(this.stream[streamName])
            return this.stream[streamName];
        return null;
     }

}


module.exports.downloand = (streamUrl, saveFileName, progress, end ) => {

    return new Promise((resolve) => {
        

        const req = m3u8stream(streamUrl,{
            requestOptions:{
                headers:{
                    'user-agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Mobile Safari/537.36',
                    'referer' : 'https://dbx.molystream.org'
                }
            }
        });

        let starttime,zaman = '',timeSec;

        req.on("progress",(segment, totalSegments) => {

            if(starttime){
                // 2 segment arası geçen süre
            
                if(!timeSec){
                    timeSec = (Date.now() - starttime) / 1000;
                }
                let diff = (totalSegments - segment.num) * timeSec;
                zaman = diff * 3;
            }

            progress(Math.floor(segment.num / totalSegments * 100),zaman); 
            
            if(!starttime){
                starttime = Date.now();
            }
        });
        
        req.on("end", () => {
            end();
            resolve();
        });
        req.pipe(fs.createWriteStream(saveFileName));
    })
}
