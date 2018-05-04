const apiResult = require('../utils/apiResult');
const db = require('../utils/pei_db');


module.exports = {
  reg(app){
    app.post('/insertcardata',async function(req,res){
      let data = await db.select('cardata') || [];
      let backdata = [];
      if (Object.keys(req.body).length > 0) {
        data.forEach(element => {
          if (req.body.Id == element.Id) {
            if(req.qty && element.qty){
              req.body.qty = parseInt(req.body.qty) + parseInt(element.qty);
              console.log('插入');
              backdata = await db.insert('cardata', [req.body])
            }
          }
        });
        res.send(apiResult(true, backdata));
      } else {
        res.send(apiResult(false));
      }
    });
  }
}
