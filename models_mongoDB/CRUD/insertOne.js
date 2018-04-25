/*
插入文件:单个文档插入insertOne()，多个文档插入insertMany();
 */
const MongoClinet = require("mongodb").MongoClient;
const assert = require("assert");
const url = "mongodb://127.0.0.1:27017";

const dbName = 'runoob';
MongoClinet.connect(url,function (err,client) {
    assert.equal(null,err);
    const db  = client.db(dbName);
    db.collection('inserts').insertOne({a:1},function (err,result) {
        assert.equal(null,err);
        assert.equal(1,result.insertedCount);
        client.close();
    });
    db.collection('inserts').insertMany([{a:2},{a:3}],function (err,result) {
        assert.equal(null,err);
        assert.equal(2,result.insertedCount);
        client.close();
    })
});
