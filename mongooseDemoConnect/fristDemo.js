// const mongoose = require("mongoose");
// mongoose.connect('mongddb:localhost:217017/user');
// const db = mongoose.connection;
//
// // db.on("error",console.error.bind(console,'connection error'));
//
// db.once("open",function(){
//     console.log("hello")
// });

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(err,client) {
    // we're connected!
    console.log("hello");
    console.log(client);
    console.log("成功连接到测试数据库！")
});