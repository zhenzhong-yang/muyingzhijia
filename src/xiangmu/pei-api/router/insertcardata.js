const apiResult = require('../utils/apiResult');
const db = require('../utils/pei_db');


module.exports = {
  reg(app){
    app.get('/insertcardata',async function(req,res){
      if (Object.keys(req.body).length > 0) {
        let data = await db.insert('cardata', [req.body])
        console.log('插入');
        res.send(apiReulst(true, data));
      } else {
        res.send(apiReulst(false));
      }
    });
  }
}
