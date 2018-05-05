var express = require('express');
// var jhbolg = require('../mongooseDemoConnect/JHmodel/JHSchema');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // jhbolg.fetch(function (err,bolg) {
  //    if(err) console.log(err);

     res.render('index', {
         title: 'JH博客网',
         bolg:{title:"jh",doc:"这是test"}
     });
  // });

});
router.get('/movie/:id',function(req,res){
    res.render('detail',{title:"详情页"})
});

router.get('/admin/list',function (req,res) {
    res.render('list',{title:"这是list"})
});

router.get('/admin/movie',function (req,res) {
   res.render('admin',{title:"这是admin"})
});

module.exports = router;
