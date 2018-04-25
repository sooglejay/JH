const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
const format = require("util").format;

const user = encodeURIComponent("jiangli");
const passWorld = encodeURIComponent("12345");
const DEFUALT = encodeURIComponent("DEFUALT");
const url = format("mongodb://127.0.0.1:27017",user,passWorld,DEFUALT);

MongoClient.connect(url,function (err,client) {
    assert.equal(err,null);
    console.log("Connected correctly to server");

    const db = client.db("col");
    createCapped(db,function(){
        client.close();
    });
    
});

/**
 * 创建加盖集合
 * @param db
 * @param callback
 */
function createCapped(db,callback) {
    db.createCollection("myCollection",{"capped":true,"size":10000,"max":5000},function (mongoError,results) {
        console.log("collection created.");
        callback();
    });
};

/**
 * 文件验证
 * @param db
 * @param callback
 */
function createValidated(db,callback) {
    db.createCollection("contacts",{
        'validator':{
            "$or":
            [
                {'phone':{'$type':"string"}},
                {'email':{'$regex':/@mongodb\.com$/}},
                {'status':{'$in':["Unkown","Incomplete"]}}
            ]
        }
    },function (mongoError,results) {
        console.log("collection created.")
        callback();
    })
}
