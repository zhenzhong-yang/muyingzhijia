const db = require('../utils/pei_db');
const apiReulst = require('../utils/apiResult');

module.exports={
  reg(app){
    app.get('/boomSell',async function(req,res){
      let data =await db.select('/boomSell');
      res.send(apiReulst(data.length>1,data));
    });
  }
}
