

const {hexToUTF8,baseURL,convertData} = require('../core/help');
const {requestResponseRegex,requestResponseArrayRegex, request} = require('../core/request');
const {stream} = require('../core/stream');

var beautify = require('js-beautify').js;

(async function getAMovie(){

   
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


(function(){

    try{

        res = beautify(`eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('1a(14(p,a,c,k,e,d){e=14(c){15(c<a?\'\':e(1A(c/a)))+((c=c%a)>1t?19.1z(c+29):c.1y(1w))};17(!\'\'.16(/^/,19)){18(c--){d[e(c)]=k[c]||e(c)}k=[14(e){15 d[e]}];e=14(){15\'\\\\w+\'};c=1};18(c--){17(k[c]){p=p.16(1v 1u(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c])}}15 p}(\'p.o=[{"13":F,"u":"\\\\i\\\\s\\\\s\\\\q\\\\C\\\\8\\\\8\\\\5\\\\v\\\\w\\\\a\\\\i\\\\5\\\\d\\\\t\\\\r\\\\B\\\\j\\\\e\\\\A\\\\5\\\\5\\\\w\\\\j\\\\y\\\\a\\\\a\\\\8\\\\1\\\\e\\\\8\\\\7\\\\h\\\\b\\\\g\\\\3\\\\D\\\\E\\\\3\\\\j\\\\7\\\\x\\\\1\\\\3\\\\2\\\\x\\\\6\\\\3\\\\g\\\\G\\\\2\\\\9\\\\z\\\\d\\\\9\\\\1\\\\3\\\\3\\\\m\\\\4\\\\H\\\\1\\\\t\\\\1\\\\2\\\\e\\\\6\\\\k\\\\r\\\\m\\\\g\\\\i\\\\J\\\\a\\\\U\\\\7\\\\b\\\\7\\\\c\\\\k\\\\b\\\\c\\\\2\\\\6\\\\q\\\\4\\\\12\\\\5\\\\f\\\\9\\\\c\\\\d\\\\I\\\\4\\\\11\\\\10\\\\f\\\\Z\\\\f\\\\l\\\\Y\\\\l\\\\n\\\\1\\\\h\\\\6\\\\2\\\\v\\\\1\\\\9\\\\n\\\\X\\\\h\\\\4\\\\W\\\\V\\\\2\\\\4\\\\k\\\\l\\\\m\\\\n\\\\T\\\\K\\\\6","S":"0","R":"Q","P":"O"}];N M=L(p.o[0].u);\',1C,1D,\'|1E|1F|1r|1H|1B|1s|1m|1q|1c|1d|1e|1f|1J|1g|1h|1b|1j|1k|1l|1i|1n|1o|1p|1I|1G|1K|1T|28|2a|2b|2c|2d|2g|2e|2f|26|2h|2i|2j|2k|2l|2m|2n|2o|27|25|1U|23|1M|1N|1O|1P|1Q|1R|1S|1L|24|1V|1W|1X|1Y|1Z|20|21|22\'.1x(\'|\'),0,{}))',62,149,'||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||function|return|replace|if|while|String|eval|x50|x6d|x7a|x44|x59|x73|x46|x56|x52|x68|x62|x4e|x65|x38|x64|x2f|x30|x31|35|RegExp|new|36|split|toString|fromCharCode|parseInt|x69|62|66|x66|x5a|jwSetup|x47|sources|x67|x70|x33|var|none|preload|hls|type|label|x76|x79|getLocation|x63|x6a|x6e|x58|x35|x57|x42|default|mu|x2d|x72|x6b|x32|x74||x6c|file|x37|x2e|x75|x4c|x51|x61|x3a|x43|x55|true|x77|x5f|x48'.split('|'),0,{}));`)

        
        console.log(res)
        }catch(e){
            console.log(e.message)
            console.log(e.name)                       // "ReferenceError"
            console.log(e.fileName)                   // "someFile.js"
            console.log(e.lineNumber)                 // 10
            console.log(e.columnNumber)               // 0
            console.log(e.stack)  
        }
    
})();

function EvalDecode(source) {
    let _eval = eval;
  
    eval = (_code) => {
      eval = _eval;
      return _code;
    };
  
    return _eval(source);
  }