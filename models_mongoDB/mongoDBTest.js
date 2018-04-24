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
/**
 * 查找集合内所有文档
 * @param db
 * @param callback
 */
const finDocuments = function (db,callback) {
    const collection = db.collection("documents");
    collection.find({}).toArray(function (mongoError,documents) {
        assert.equal(mongoError,null);
        console.log("Found the following records");
        console.log(documents);
        callback(documents)
    });
}
/**
 * 更新一个文档
 * @param db
 * @param callback
 */
const updateDocument = function(db,callback){
    const collection = db.collection('document');
    collection.updateOne({a:2},{$set:{b:1}},function (err,result) {
        assert.equal(err,null);
        assert.equal(1,result.result.n);
        console.log("Updated the document with the field a equal to 2");
        callback(result);
    })
}