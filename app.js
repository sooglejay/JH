var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const mongoclient = require('mongodb').MongoClient;
const url = "mongodb://127.0.0.1:27017/johnny";
const dbname = "johnny";

mongoclient.connect(url,function (err,client) {
  var db = client.db(dbname);
});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testRouter = require('./routes/test');

// 从终端的环境变量中获取端口号
// 使用 PORT=8000 node app.js（Linux 和 macOS）
// 或者先使用 export PORT=8000，再输入 node app.js（Linux 和 macOS）
// 使用 set PORT=8000&&node app.js，也可以拆开写成两个命令（Windows）
var port = process.env.PORT || 8000

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/test',testRouter);
app.listen(port)

app.use(function(err, req, res, next) {
  console.log("不指定路径的话，访问任意路径都会执行这个中间件");  // 会继续执行 用户访问的路径
  next();
});

app.use('admin/list',function(err, req, res, next) {
  console.log("访问admin/list");
  // 会继续执行 用户访问的路径
  res.send('respond with a resource');
  next();
});



//使用moment 这是一个js的库 包含了一些jQuery未实现的函数
app.locals.moment = require('moment');
//set locals
// app.locals.title= "JH";
// app.locals.email="jiangli450324@163.com";
// view engine setup
console.log("服务已开启，请访问http://127.0.0.1:"+port);
module.exports = app;
