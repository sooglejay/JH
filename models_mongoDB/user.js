//创建集合
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/runoob";
MongoClient.connect(url,function (err,db) {
    if(err) throw err;
    console.log("数据库连接！");
    var dbase = db.db("runoob");
    dbase.createCollection('user',function (err,res) {
       if(err) throw err;
       console.log("创建集合!");
        /**
         * 如果插入多条，可以用insertMany方法 ,更新一条活着多条：updateOne Or updateMany两个方法,
         * 更多操作请登录www:mongodb.org查询api
         *
         */

       dbase.collection("user").insertOne({"name":"奖励"},function (err,res) {
           if(err) throw err;
           console.log("文档插入成功!");
           // var obj = dbase.collection('user').findOne;
           // console.log(obj);
       });
       db.close();
    });
});