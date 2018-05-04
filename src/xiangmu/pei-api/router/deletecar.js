const db = require('../utils/pei_db.js')
const apiReulst = require('../utils/apiResult.js')



module.exports = {
    reg(app) {
        app.get('/deletecardata/:id:user', async function (req, res) {
            let Id = String(parseInt(req.params.id));
            let user = String(req.params.user);
            console.log(Id);
            console.log(typeof Id);
            let deletedata = await db.deleteOne('cardata', { goodsid: Id ,carusername: user});
            console.log(deletedata);
            res.send(apiReulst(deletedata.result.n > 0, deletedata.result, '哈哈'));
        })
    }
}
