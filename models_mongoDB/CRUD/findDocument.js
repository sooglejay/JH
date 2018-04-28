const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";

const dbName = "user";

MongoClient.connect(url,function (err,client) {
    const db = client.db(dbName);
    const collection = db.collection('col');

    collection.insertOne({"name":"wy"},function (err,result) {

        console.log("hahah");
        console.log(result.ops);
        console.log(Object.keys(result.ops));
    })
});