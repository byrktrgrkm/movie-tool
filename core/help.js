module.exports.rtt = (str) => {
    return  str
            .toString()
            .replace(
                /[a-z]/gi, 
                function(s){
                    return String.fromCharCode( s.charCodeAt(0)+(s.toLowerCase() < 'n' ? 13 : -13 ) )
                }
            )
}

module.exports.convertData = (data) => {
    const replace = {};

    Object.entries(data).map((item) => {
        let d = item[1];
        d['tt'] = this.atob(d['tt']);
        if (d['sx']['t']) {
            this.map64(d['sx']['t'], (ii, kk) => {
                d['sx']['t'][kk] = this.atob(this.rtt(ii));
            });
        }
        if (d['sx']['p']) {
            this.map64(d['sx']['p'], (ii, kk) => {
                d['sx']['p'][kk] = this.atob(this.rtt(ii));
            });
        }
        replace[item[0]] = d;
    });

    
    const list = Object.keys(replace).map(item => {
        return {
            type: replace[item].tt,
            url:  replace[item].sx.t
        }
    });
    return { 
        list,
        get: function(type){
            return list.find(i => i.type == type)?.url;
        },
        isset: function(type){
            return list.find(i => i.type.toLowerCase() == type.toLowerCase()) !== undefined;
        }
    }
}

module.exports.btoa = (string) => {
    return Buffer.from(string).toString('base64');
}
module.exports.atob = (string) => {
    return Buffer.from(string, 'base64').toString();
}
module.exports.map64 = (data, func) => {
    Object.entries(data).map(function(e){
        func(e[1],e[0]);
    });
};

module.exports.hexToUTF8 = (hex) => {
    return hex.replace(/\\x([0-9A-Fa-f]{2,4})/g, function() {
        return String.fromCharCode(parseInt(arguments[1], 16));
    });
}

module.exports.resolutionToHuman = resolution => {
    
    /*
    resolution 1920x800

    list sources
        7680p (8K): 7680x4320
        2160p (4K): 3840x2160
        1440p: 2560x1440
        1080p: 1920x1080
        720p: 1280x720
        480p: 854x480
        360p: 640x360
        240p: 426x240
    */
    
    const [x,y] = resolution.split('x');

    const types = {
        7860: '7680p (8K)',
        3840: '2160p (4K)',
        2560: '1440p',
        1920: '1080p',
        1280: '720p',
        854:  '480p',
        640:  '360p',
        426:  '240p'
    };

    if(Object.hasOwn(types, x)){
        return types[x];
    }
    
    return null;
}

module.exports.baseURL = url => {
    return url.match(/^https?:\/\/[^#?\/]+/)[0];
}