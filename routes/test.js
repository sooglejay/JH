var express = require('express');
var router = express.Router();
const mongoclient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const dbname = "johnny";

mongoclient.connect(url,function (err,client) {
    const db = client(dbname);
});

router.get('/list/:id',function (req,res) {
    const id = req.params.id;

    db.find({'id'},function () {

    });
 res.render('test/test',{title:"list页"})
});

router.post('/list/new',function(req,res) {
   res.direction('/admin');
});

router.get('/admin',function(req,res) {
    res.render('/test/admin',{title:"admin页"})
});

module.exports = router;