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
    //插入多条文档
    db.collection('inserts').insertMany([{a:2},{a:3}],function (err,result) {
        assert.equal(null,err);
        assert.equal(2,result.insertedCount);
        client.close();
    })
});

/**
 * 序列号文档中的函数
 * @param db
 * @param callback
 */
function serializeFunction(db,callback) {
    db.collection('users').insertOne({
        a:1,
        b:function () {
            return 'hello'
        }
    },{w:'majority',wtimeout:10000,serializeFunctions:true},function (mongoError,resule) {
        assert.equal(null,mongoError);
        assert.equal(1,resule.insertedCount);
        callback(resule);
    })
}