// var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb://localhost:27017/runoob";
//
// MongoClient.connect(url,function (err,db) {
//     if (err) throw err;
//     console.log("数据库连接!");
//     db.close();
// });

const MongoClient = require('mongodb').MongoClient;
const assert = require("assert");

const url = 'mongodb://localhost:27017';

const dbName = 'myproject';

MongoClient.connect(url,function (err,client) {
    assert.equal(null,err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    insertDocuments(db,function (res) {
        console.log(res.ops);
        client.close()
    })
});
/**
 * 插入文档，
 * @param err
 * @param callback 传入一个result，这里面包含了对插入文档的结果
 */
const insertDocuments = function (err,callback) {
    const collection = db.collection('documents');
    collection.insertMany(
        [
            {a:1},{a:2},{a:3}
        ]
    ,function (err,result) {
            assert.equal(err,null);
            assert.equal(3,result.result.n);
            assert.equal(3,result.ops.length);
            console.log("Inserted 3 documents into the collection");
            callback(result);
        });
}

const finDocuments = function (db,callback) {
    const collection = db.collection("documents");
    collection.find({}).toArray(function (mongoError,docum) {  })
};