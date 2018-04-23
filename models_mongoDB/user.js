//创建集合
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/runoob";
MongoClient.connect(url,function (err,db) {
    if(err) throw err;
    console.log("数据库连接！");
    console.log(db);
    var dbase = db.db("runoob");
    dbase.createCollection('user',function (err,res) {
       if(err) throw err;
       console.log("这是创建集合的回调函数内容");
       console.log(res);
       console.log(res.s.name);
        /**
         * 如果插入多条，可以用insertMany方法 ,更新一条活着多条：updateOne Or updateMany两个方法,
         * 更多操作请登录www:mongodb.org查询api
         *
         */

        /**
         * 试着从上一个回调函数中的数据拿到api
         */
        // res.s.name.insertOne({"name":"加你"},function (err,res) {
        //     if(err) throw err;
        //    console.log("hellow")
        //
        // });
        //失败告终
       dbase.collection("user").insertOne({"name":"奖励"},function (err,res) {
           if(err) throw err;
           console.log("文档插入成功!");
           // var obj = dbase.collection('user').findOne;
           // console.log(obj);
           console.log(res.ops[0].name);
           var obj = res.ops[0];
           console.log(obj.name)

       });
       db.close();
    });
});