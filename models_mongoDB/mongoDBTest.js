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

/*
身份认证机制
 */
var f  = require("util").format;
/*
模拟数据：MongoDB用户jiangli，密码：123456 身份认证机制为DEFAULT
 */
const user = encodeURIComponent('jiangli');
const password = encodeURIComponent('123456');
const authMechanism = 'DEFAULT';

const url = f('mongodb://localhost:27017',user,password,authMechanism);

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
    });
}
/**
 * 更新多个文档
 * @param db
 * @param callback
 */
const updateManyDocument = function (db,callback) {
    const collection = db.collection('document');
    collection.updateMany({a :"查询器"},{$set:{b:"设置器"}},function (err,result) {
        assert.equal(err,null);
        console.log("更新全部附和条件的");
        callback(result);
    });
}
/**
 * 删除文档
 * @param db
 * @param callback
 */
const removeDocument = function (db,callback) {
    const collection = db.collection('document');
    collection.deleteOne({a:3},function (err,result) {
        assert.equal(err.null)
        assert.equal(1,result.result.n);
        console.log("Removed the document with the field a equal to 3");
        callback(result);
    });
}
/**
 * 索引一个集合
 * @param db
 * @param callback
 */
const indexCollection = function (db,callback) {
    db.collection('document').createIndex({"a":1},null,function (mongoError,resule) {
        console.log(resule);
        callback();
    })
};


module.exports = MongoClient;