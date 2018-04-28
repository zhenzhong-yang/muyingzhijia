const mc = require('mongodb').MongoClient;
const ar = require('../utils/apiResult')

var db = null;
mc.connect("mongodb://localhost:27017",(error,client)=>{
    db = client.db("gz1801");
})

module.exports = {
    async select(_collection, _condition = {}){
        const result = await db.collection(_collection).find(_condition).toArray();
        return ar(result.length > 0, result);
    }
}