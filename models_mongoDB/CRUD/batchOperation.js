// const JH = require('./includeMongo.js')
// console.log(JH.dbName);

// const url = JH.url;
// const assert = JH.assert;
// const MongoClient = JH.MongoClient;

// const MongoClient = require("mongodb").MongoClient;
// const assert = require("assert");
//
// const url = 'mongodb://localhost:27107';
//
// const dbName = 'runoob';
//
// MongoClient.connect(url,function (err,client) {
//     const db = client.db(dbName);
//     const col = db.collection('col');
//
//     var bulk = col.initialzeOrderedBulkOp();
//
//     for(var i = 0; i< 10 ;i++) {
//         bulk.find({b:i}).upsert().updateOne({b:1});
//     }
//
//     bulk.find({b:1}).deleteOne();
//     bulk.execute(function (err,result) {
//         assert.equal(null,err);
//         client.close();
//     });
// });
// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
//
// // Connection URL
// const url = 'mongodb://localhost:27017';
//
// // Database Name
// const dbName = 'myproject';
//
// // Use connect method to connect to the Server
// MongoClient.connect(url, function(err, client) {
//     assert.equal(null, err);
//     console.log("Connected correctly to server");
//
//     const db = client.db(dbName);
//
//     // Get the collection
//     const col = db.collection('bulk_write');
//     col.bulkWrite([
//             { insertOne: { document: { a: 1 } } }
//             , { updateOne: { filter: {a:2}, update: {$set: {a:2}}, upsert:true } }
//             , { updateMany: { filter: {a:2}, update: {$set: {a:2}}, upsert:true } }
//             , { deleteOne: { filter: {c:1} } }
//             , { deleteMany: { filter: {c:1} } }
//             , { replaceOne: { filter: {c:3}, replacement: {c:4}, upsert:true}}]
//         , {ordered:true, w:1}, function(err, r) {
//             assert.equal(null, err);
//             assert.equal(1, r.insertedCount);
//             assert.equal(1, Object.keys(r.insertedIds).length);
//             assert.equal(1, r.matchedCount);
//             assert.equal(0, r.modifiedCount);
//             assert.equal(0, r.deletedCount);
//             assert.equal(2, r.upsertedCount);
//             assert.equal(2, Object.keys(r.upsertedIds).length);
//
//             // Ordered bulk operation
//             client.close();
//         });
// });

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Use connect method to connect to the Server
MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    const col = db.collection('bulkops');
    // Create ordered bulk, for unordered initializeUnorderedBulkOp()
    var bulk = col.initializeOrderedBulkOp();
    // Insert 10 documents
    for(var i = 0; i < 10; i++) {
        bulk.insert({a: i});
    }

    // Next perform some upserts
    for(var i = 0; i < 10; i++) {
        bulk.find({b:i}).upsert().updateOne({b:1});
    }

    // Finally perform a remove operation
    bulk.find({b:1}).deleteOne();

    // Execute the bulk with a journal write concern
    bulk.execute(function(err, result) {
        assert.equal(null, err);
        client.close();
    });
});