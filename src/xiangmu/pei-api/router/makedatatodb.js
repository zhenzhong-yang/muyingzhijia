const db = require('../utils/pei_db.js')

let data = [
    {
        "Id": 1084,
        "SubjectName": "CHBABY推车 安全出行  欢乐无忧",
        "SujectDesc": "CHBABY推车 安全出行  欢乐无忧",
        "ApplyPlace": "[9]",
        "ApplyLabel": "",
        "PictureUrl": "http://img.boodoll.cn/img/201602/20160214130826_31_chbaby.jpg",
        "SetDiscountTypeId": 1,
        "SetDiscount": "399.00",
        "OriDiscount": "￥399.00起",
        "ReOriDiscount": "",
        "StartTime": "\/Date(1525075693000-0000)\/",
        "EndTime": "\/Date(1528704494000-0000)\/",
        "IsEnable": true,
        "IsDeleted": false,
        "CreateBy": 888,
        "CreateDate": "\/Date(1525075700913-0000)\/",
        "UpdateBy": 888,
        "UpdateDate": "\/Date(1525075701323-0000)\/",
        "Sort": 3136,
        "AppClickUrl": "http://m.muyingzhijia.com/Activity/ActivePage?id=1797"
    },
    {
        "Id": 2846,
        "SubjectName": "雅培菁智6罐送保温杯12罐送豪礼",
        "SujectDesc": "雅培菁智6罐送保温杯12罐送豪礼",
        "ApplyPlace": "[9]",
        "PictureUrl": "http://img.muyingzhijia.com/img/201802/20180208113122_10_yp.jpg",
        "SetDiscountTypeId": 1,
        "SetDiscount": "179",
        "OriDiscount": "￥179起",
        "ReOriDiscount": "",
        "StartTime": "\/Date(1524189801000-0000)\/",
        "EndTime": "\/Date(1525399403000-0000)\/",
        "IsEnable": true,
        "IsDeleted": false,
        "CreateBy": 888,
        "CreateDate": "\/Date(1525067759740-0000)\/",
        "UpdateBy": 888,
        "UpdateDate": "\/Date(1525075682463-0000)\/",
        "Sort": 3135,
        "AppClickUrl": "http://m.muyingzhijia.com/Activity/ActivePage?id=381"
    },
    {
        "Id": 1041,
        "SubjectName": "口罩专场 和细菌拜拜",
        "SujectDesc": "口罩专场 和细菌拜拜 雾霾天也可以放心出门",
        "ApplyPlace": "[9][14]",
        "ApplyLabel": "",
        "PictureUrl": "http://img.boodoll.cn/img/201601/20160121135917_31_kozhao.jpg",
        "SetDiscountTypeId": 1,
        "SetDiscount": "19.9",
        "OriDiscount": "￥19.9起",
        "ReOriDiscount": "",
        "StartTime": "\/Date(1523353705000-0000)\/",
        "EndTime": "\/Date(1526377706000-0000)\/",
        "IsEnable": true,
        "IsDeleted": false,
        "CreateBy": 888,
        "CreateDate": "\/Date(1525067798427-0000)\/",
        "UpdateBy": 888,
        "UpdateDate": "\/Date(1525075682463-0000)\/",
        "Sort": 3134,
        "AppClickUrl": "http://m.muyingzhijia.com/Activity/ActivePage?id=1958"
    },
    {
        "Id": 3218,
        "SubjectName": "爱羽乐新客买一送一",
        "SujectDesc": "爱羽乐新客买一送一",
        "ApplyPlace": "[1][9][12]",
        "PictureUrl": "http://img.muyingzhijia.com/img/201804/20180426095545_10_alula1242.jpg",
        "SetDiscountTypeId": 1,
        "SetDiscount": "88.00",
        "OriDiscount": "￥88.00",
        "ReOriDiscount": "",
        "StartTime": "\/Date(1524672000000-0000)\/",
        "EndTime": "\/Date(1527782399000-0000)\/",
        "IsEnable": true,
        "IsDeleted": false,
        "CreateBy": 888,
        "CreateDate": "\/Date(1524709410037-0000)\/",
        "UpdateBy": 888,
        "UpdateDate": "\/Date(1525075682463-0000)\/",
        "Sort": 3133,
        "AppClickUrl": "http://m.muyingzhijia.com/Activity/ActivePage?id=2086"
    },
    {
        "Id": 1930,
        "SubjectName": "Minimoto小米米宝宝棉品",
        "SujectDesc": "触感轻柔 舒适透气",
        "ApplyPlace": "[9]",
        "ApplyLabel": "",
        "PictureUrl": "http://img.boodoll.cn/img/201608/20160805112829_31_mimi.jpg",
        "SetDiscountTypeId": 1,
        "SetDiscount": "19.00",
        "OriDiscount": "￥19.00起",
        "ReOriDiscount": "",
        "StartTime": "\/Date(1522684800000-0000)\/",
        "EndTime": "\/Date(1527782400000-0000)\/",
        "IsEnable": true,
        "IsDeleted": false,
        "CreateBy": 888,
        "CreateDate": "\/Date(1525017526853-0000)\/",
        "UpdateBy": 888,
        "UpdateDate": "\/Date(1525075682463-0000)\/",
        "Sort": 3132,
        "AppClickUrl": "http://m.muyingzhijia.com/Activity/ActivePage?id=2082"
    }
];

module.exports={
  reg(app){
    app.get('/makedatatodb',function(res,req){
      console.log('makesuccess');
      data.forEach(function(item){
        db.insert('todaySpecial', [item]);
      })
    });
  }
}
