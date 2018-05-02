const db = require('../utils/pei_db');


module.exports={
  reg(app){
    app.get('/todayspecial',function(){
      db.select('todaySpecial', _condition, x)
    });
  }
}
