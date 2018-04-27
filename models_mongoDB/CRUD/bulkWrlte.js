const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://127.0.0.1:27017";
const dbName = 'user';

MongoClient.connect(url,function (err,client) {
    assert.equal(null,err);
    const db = client.db(dbName);
    const col = db.collection('col');
    /**
     * 批量执行api
     */
    col.bulkWrite([
        {insertOne:{document:{a:1}}},
        {updateOne:{filter:{a:2},update:{$set:{a:2}},upsert:true}}
    ],{ordered:true,w:1},function (bulkWriteError,result) {
        assert.equal(null,bulkWriteError);
        assert.equal(1,result.insertedCount);
        assert.equal(2,r)
    })
})