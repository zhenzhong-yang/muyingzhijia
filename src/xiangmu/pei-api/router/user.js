
const jwt = require('jsonwebtoken');

/*引入db.js模块*/
const db = require('../utils/pei_db.js');

const apiResult = require('../utils/apiResult.js');


/*导出user.js*/
module.exports = {
    reg(app){
        app.post('/login', async (req,res) =>{
            console.log(req.body);
            let username = req.body.username;
            let password = req.body.password;
            console.log(username,password);
            
            let result = await db.select('user',{username,password});
            
            if(result.status){
                console.log(result);
                let token = jwt.sign({username},'123456',{expiresIn:60});
                let ar = apiResult(result.status,token);
                res.send(ar);
            }else{
                res.send(result);
            }
            
        });

        // 注册
        app.post('/reg',async (req,res)=>{
            // 获取用户数据
            let username = req.body.username;
            let password = req.body.password;

            // 用户地址：null
            // let address = '';

            // 调用数据库模块
            // 注册之前先查询是否存在
            let result = await db.select('user',{username});
            console.log(result.status);
            if(result.status){
                res.send(apiResult(false));
            }else{
                let result = await db.insert('user',[{username,password}]);
                console.log(result);
                res.send(result);
            }
        });
    }
}