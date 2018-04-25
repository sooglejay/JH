/*
使用insertMany方法插入文档时还指定了数字数据类型
 */
const Long = require("mongodb").Long;
const Decimal = require("mongodb").Decimal128;

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = 'mongodb://localhost:27107';

const dbName = 'myproject';

MongoClient.connect(url,function (err,client) {
    assert.equal(null,err);
    console.log("Connected correctly to server!");

    const db = client.db(dbName);
    const longValue =Long(1787);
    const decimalValue = Decimal.fromString("27.8892836");

    db.collection('user').insertMany([
        {a:longValue},
        {b:decimalValue}
    ],function (err,result) {
        assert.equal(null,err);
        assert.equal(2,result.insertedCount);
        client.close()
    })
})
//执行此方法后上述操作将文档插入到user集合中，数据模型如下所示：
// { "_id" : ObjectId("57d6f6...d7bd7a"), "a" : NumberLong(1787) }
// { "_id" : ObjectId("57d6f6...d7bd7b"), "b" : NumberDecimal("27.8892836") }