module.exports.settings = {
    defaultLanguage : 'tr',
    evalExploitSource: 'https://eval-exploit.herokuapp.com/eval',/** POST data */
    endpoints:{
        base:'https://www.fullhdfilmizlesene.pw',
        query: (q) => {
            return (`${this.settings.endpoints.base}/autocomplete/q.php?q=${q}`);
        }
    }
};