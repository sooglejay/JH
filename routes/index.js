var express = require('express');
var jhbolg = require('../mongooseDemoConnect/JHmodel/JHSchema');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  jhbolg.fetch(function (err,bolg) {
     if(err) console.log(err);

     res.render('index', {
         title: 'JH博客网',
         bolg:bolg
     });
  });

});

module.exports = router;
