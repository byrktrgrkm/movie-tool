const {evalReplace} = require('../core/request');
const {regexToData,hexToUTF8} = require('../core/help');
(async function EvalExploit(){

    let str = 'eval(function(p,a,c,k,e,d){e=function(c){return(c<a?\'\':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!\'\'.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return\'\\\\w+\'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c])}}return p}(\'1p(1j(p,a,c,k,e,d){e=1j(c){1k(c<a?\\\'\\\':e(1T(c/a)))+((c=c%a)>1S?1o.1R(c+29):c.1Q(1O))};1m(!\\\'\\\'.1l(/^/,1o)){1n(c--){d[e(c)]=k[c]||e(c)}k=[1j(e){1k d[e]}];e=1j(){1k\\\'\\\\\\\\w+\\\'};c=1};1n(c--){1m(k[c]){p=p.1l(1N 1M(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c])}}1k p}(\\\'Q.S=[{"1i":13,"M":"\\\\\\\\d\\\\\\\\f\\\\\\\\f\\\\\\\\2\\\\\\\\I\\\\\\\\W\\\\\\\\j\\\\\\\\j\\\\\\\\l\\\\\\\\V\\\\\\\\H\\\\\\\\d\\\\\\\\m\\\\\\\\l\\\\\\\\f\\\\\\\\5\\\\\\\\m\\\\\\\\U\\\\\\\\D\\\\\\\\F\\\\\\\\f\\\\\\\\m\\\\\\\\D\\\\\\\\H\\\\\\\\y\\\\\\\\K\\\\\\\\5\\\\\\\\5\\\\\\\\j\\\\\\\\3\\\\\\\\o\\\\\\\\j\\\\\\\\7\\\\\\\\7\\\\\\\\1\\\\\\\\s\\\\\\\\c\\\\\\\\1\\\\\\\\b\\\\\\\\a\\\\\\\\q\\\\\\\\w\\\\\\\\4\\\\\\\\s\\\\\\\\v\\\\\\\\8\\\\\\\\a\\\\\\\\e\\\\\\\\4\\\\\\\\Y\\\\\\\\c\\\\\\\\7\\\\\\\\E\\\\\\\\4\\\\\\\\a\\\\\\\\x\\\\\\\\4\\\\\\\\4\\\\\\\\c\\\\\\\\x\\\\\\\\a\\\\\\\\k\\\\\\\\b\\\\\\\\B\\\\\\\\n\\\\\\\\g\\\\\\\\q\\\\\\\\J\\\\\\\\8\\\\\\\\6\\\\\\\\E\\\\\\\\g\\\\\\\\9\\\\\\\\w\\\\\\\\3\\\\\\\\k\\\\\\\\r\\\\\\\\g\\\\\\\\x\\\\\\\\11\\\\\\\\9\\\\\\\\1\\\\\\\\d\\\\\\\\i\\\\\\\\5\\\\\\\\L\\\\\\\\p\\\\\\\\G\\\\\\\\u\\\\\\\\d\\\\\\\\9\\\\\\\\12\\\\\\\\A\\\\\\\\6\\\\\\\\G\\\\\\\\2\\\\\\\\k\\\\\\\\A\\\\\\\\v\\\\\\\\3\\\\\\\\2\\\\\\\\L\\\\\\\\t\\\\\\\\16\\\\\\\\b\\\\\\\\r\\\\\\\\8\\\\\\\\P\\\\\\\\o\\\\\\\\n\\\\\\\\8\\\\\\\\a\\\\\\\\w\\\\\\\\C\\\\\\\\1\\\\\\\\t\\\\\\\\u\\\\\\\\O\\\\\\\\18\\\\\\\\n\\\\\\\\C\\\\\\\\6\\\\\\\\2\\\\\\\\e\\\\\\\\p\\\\\\\\F\\\\\\\\1a\\\\\\\\h\\\\\\\\1\\\\\\\\3\\\\\\\\B\\\\\\\\g\\\\\\\\T\\\\\\\\h\\\\\\\\B\\\\\\\\1c\\\\\\\\2\\\\\\\\3\\\\\\\\l\\\\\\\\1d\\\\\\\\m\\\\\\\\N\\\\\\\\7\\\\\\\\5\\\\\\\\J\\\\\\\\I\\\\\\\\o\\\\\\\\6\\\\\\\\e\\\\\\\\K\\\\\\\\q\\\\\\\\4\\\\\\\\n\\\\\\\\2\\\\\\\\i\\\\\\\\3\\\\\\\\9\\\\\\\\l\\\\\\\\1\\\\\\\\N\\\\\\\\P\\\\\\\\b\\\\\\\\6\\\\\\\\1\\\\\\\\1h\\\\\\\\t\\\\\\\\T\\\\\\\\y\\\\\\\\h\\\\\\\\f\\\\\\\\R\\\\\\\\r\\\\\\\\p\\\\\\\\o\\\\\\\\1g\\\\\\\\h\\\\\\\\9\\\\\\\\1\\\\\\\\i\\\\\\\\d\\\\\\\\s\\\\\\\\c\\\\\\\\b\\\\\\\\e\\\\\\\\1f\\\\\\\\i\\\\\\\\5\\\\\\\\O\\\\\\\\8\\\\\\\\u\\\\\\\\R\\\\\\\\1e\\\\\\\\z\\\\\\\\7\\\\\\\\6\\\\\\\\7\\\\\\\\z\\\\\\\\c\\\\\\\\k\\\\\\\\y\\\\\\\\z\\\\\\\\e\\\\\\\\A\\\\\\\\2\\\\\\\\C\\\\\\\\v\\\\\\\\D\\\\\\\\g","1b":"0","19":"15","17":"X"}];14 10=Z(Q.S[0].M);\\\',1L,1U,\\\'|1W|1X|1Y|1Z|20|21|1J|23|1V|1K|1C|1I|1r|1s|1t|1u|25|1v|1w|1x|1q|1z|1A|1B|1y|1D|1E|1F|1G|1H|24|22|26|2k|2z|2A|2B|2C|2D|2I|2E|2F|2G|2H|2x|2K|2L|2M|2O|2P|2J|2Q|2R|2S|2N|2y|2w|2j|2u|28|2a|2b|2c|2d|2e|2f|2g|2h|27|2i|2v|2l|2m|2n|2o|2p|2q|2r|2s|2t\\\'.1P(\\\'|\\\'),0,{}))\',62,179,\'|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||function|return|replace|if|while|String|eval|x69|x68|x4f|x74|x31|x32|x2f|x5a|x52|x65|x77|x6f|x48|x64|x4b|x78|x63|x2d|x6a|x4e|x6d|62|RegExp|new|36|split|toString|fromCharCode|35|parseInt|81|x38|x50|x70|x66|x41|x7a|x47|x46|x6c|x76|x42|x56|preload|x58||getLocation|mu|x79|x35|true|var|hls|x34|x53|x3a|x62|x5f|label|x39|x45|x36|x4d|x67|x4c|default|none|type|x37|x30|x6e|x51|x6b|x43|x49|x72|x61|x44|x2e|x73|x59|x57|x75|x33|file|x71|x54|x4a|jwSetup|x55|sources\'.split(\'|\'),0,{}));\n';
    let response = await evalReplace(str); 
    const regex = /"file":\s+"(.*)"/gm;
    const field = regexToData(response,regex);

    const hex = hexToUTF8(field);
    
})();