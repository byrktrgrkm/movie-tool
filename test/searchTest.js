const {search} = require('../core/actions');
const {lang} = require('../core/lang');


(async function(){


    const result = await search("world");

    let result2 = result.map(i => {
        i.filmTarzLang = lang(`movie.styles.${i.filmTarz}`)
        return i;
    });

    console.log(result2)

})();


(function langTest(){
    let x = lang(`movie.styles.td`)

    console.log(x);

});