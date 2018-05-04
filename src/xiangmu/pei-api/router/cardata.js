const db = require('../utils/pei_db');
const apiReulst = require('../utils/apiResult');

module.exports={
  reg(app){
    app.get('/cardata/:user',async function(req,res){
        
        let Id = String(req.params.user);
        console.log(Id);
        let data = await db.select('cardata',{carusername:Id});
        res.send(apiReulst(data.length>1,data));
    });
  }
}
