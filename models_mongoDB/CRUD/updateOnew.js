const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://127.0.0.1:27017";

const dbName = "user";

MongoClient.connect(url,function (err,client) {
    assert.equal(null,err);
    const db = client.db(dbName);

    const col = db.collection("col");
    col.updateOne({"name":"jangli"},{$set:{"name":"johnny"}},function (err,result) {
        console.log("更新一个");
    });
    col.updateMany({"name":"johnny"},{$set:{"name":"jahhah"}},function (err,result) {
        console.log("更新全部");
    });
    db.close();
});