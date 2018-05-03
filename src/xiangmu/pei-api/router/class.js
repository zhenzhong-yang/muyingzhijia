const request = require('request');
const apiResult = require('../utils/apiResult')

module.exports = {
    reg(app){
        app.get('/class', (req, res) => {
            request.get('http://goods.api.muyingzhijia.com/json/reply/QueryCategoryListReq', (error, response, body) => {
                body = JSON.parse(body);
                console.log(666);
                res.send(apiResult(true, body.CategoryList));
            })
        })
    }
}
