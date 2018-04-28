const request = require('request');
const apiResult = require('../utils/apiResult')

module.exports = {
    reg(app){
        app.get('/trades', (req, res) => {
            request.get('http://data.gateio.io/api2/1/orderBook/btc_usdt', (error, response, body) => {
                body = JSON.parse(body);
                console.log(body)
                // let asks = [];
                // for(let items of body.asks){
                //     asks.push({price: items[0], qty: items[1]})
                // }
                // let bids = [];
                // for(let items of body.bids){
                //     bids.push({price: items[0], qty: items[1]})
                // }           
                
                let trades = [];
                for(let items of body.asks){
                    trades.push({type: 'asks', price: items[0], qty: items[1]})
                }
                for(let items of body.bids){
                    trades.push({type: 'bids', price: items[0], qty: items[1]})
                }                
                res.send(apiResult(true, trades));
            })
        })
    }
}
