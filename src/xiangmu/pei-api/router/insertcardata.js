const apiResult = require('../utils/apiResult');
const db = require('../utils/pei_db');


module.exports = {
  reg(app){
    app.post('/insertcardata',async function(req,res){
      if (Object.keys(req.body).length > 0) {
        let data = await db.insert('cardata', [req.body])
        console.log('插入');
        res.send(apiResult(true, data));
      } else {
        res.send(apiReulst(false));
      }
    });
  }
}
