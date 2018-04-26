const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

//本地数据库地址
const url = "mongodb://localhost:27017";

const dbName = "runoob";

MongoClient.connect(url,function (err,client) {
   const db = client.db(dbName);
   const col = db.collection('col');

   col.insert([{a:1},{a:2},{a:2}],function (err,result) {
       assert.equal(null,err);
       assert(3,result.result.n);

       col.findOneAndUpdate({a:1},{$set:{b:1}},{returnOriginal:false,sort:[[a,1]],upsert:true},
           function (mongoError,result) {
           assert.equal(null,err);
           assert.equal(1,r.value.b);

           col.findOneAndDelete({a:2},function () {
               
           });
           col.find();
           })

   })
});