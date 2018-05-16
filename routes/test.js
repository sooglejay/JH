var express = require('express');
var router = express.Router();



router.get('/list',function(req,res) {

        res.render('test/admin',{title:"hello world"})
},function (req,res) {
    console.log('多个回调')
});


router.post('/list/new',function(req,res) {
    console.log(req.body);
     var content = req.body;
     console.log(content.content);
     db.insert(content);

});

// router.get('/admin',function(req,res) {
//
//     res.render('test/admin',{title:"小陈"})
// });

module.exports = router;