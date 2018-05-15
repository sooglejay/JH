var express = require('express');
var asser = require('assert');
var _ = require('underscore');
var JH = require('../mongooseDemoConnect/JHmodel/JHSchema');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  JH.fetch(function (err,result) {
     if(err) console.log(err);

     res.render('index', {
         title: 'JH博客网',
         blog:result
     });
  });

});
router.get('/blog',function(req,res){
    var id = req.params.id;
    JH.findById(id,function(err,result) {
        asser.equal(null,err);
        res.render('b',{title:"详情页",blog:result})
    })

});

router.post('/admin/blog/new',function(req,res) {
   // var id = req.body.blog.id;
   var blogObj =req.body.blog;

   var _blog;
   if(id !== 'undefined') {
       JH.findById(id,function (err,result) {
           asser.equal(null,err);
           _blog =_.extend(result,blogObj);
           _blog.save(function(err,result) {
               asser.equal(null,err);
               res.redirect('/blog'+1)
           })
       })
   }
   else{
       _blog = new JH({
           // _id:blogObj.id,
           title:blogObj.title,
           subtitle:blogObj.subtitle,
           body:blogObj.body
       });
       _blog.save(function(err,blog){
          res.redirect('/blog');
       });
   }
    console.log(req.body);
    console.log(blogObj.title);
    console.log(blogObj.subtitle);
    console.log(blogObj);
    console.log(blogObj);
});

router.get('/list',function (req,res) {
    res.render('list')
});

//后台管理页
router.get('/admin/movie',function (req,res) {
   res.render('admin',{b:[
            {title:"构建Node应用",createBlog:"2018/6/34",updataBlog:"2018/7/23",blogThou:"奖励"},
           {title:"构建Node应用",createBlog:"2018/6/34",updataBlog:"2018/7/23",blogThou:"奖励"},
           {title:"构建Node应用",createBlog:"2018/6/34",updataBlog:"2018/7/23",blogThou:"奖励"},
           {title:"构建Node应用",createBlog:"2018/6/34",updataBlog:"2018/7/23",blogThou:"奖励"},
           {title:"构建Node应用",createBlog:"2018/6/34",updataBlog:"2018/7/23",blogThou:"奖励"},
           {title:"构建Node应用",createBlog:"2018/6/34",updataBlog:"2018/7/23",blogThou:"奖励"}
       ]})
});


module.exports = router;
