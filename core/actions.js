const {request} = require('../core/request');
const { settings } = require('../setting');
module.exports.search = async (query) => {
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
