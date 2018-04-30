// var mongoose = require("mongoose");
//
// mongoose.connect("mongodb://localhost/user");
//
// var Mymodel = mongoose.model('Test',new Schema({name:String}));
//
// Mymodel.findOne(function (err,result) {
//    console.log(result);
// });
//


// function f() {
//     var str = "顿嗯";
//     var a = str => console.log(str);
// };
// console.log("hhell");
// var f =  new f();
// f.a()




// 'use strict'
// var num = 3;
// var a = x=>x*x;
// var x = a(num);
// console.log(x);
//
// // (str => console.log(str+"ssss"))("jiangli");
//
// f =>f=>console.log(f+"sss");
//
// function f(x) {
//     console.log(x);
//     // console.log(str+"joangjiangj")
//     return function (str) {
//         console.log(str+"sss");
//         console.log(x);
//     }
// }
// // var str = "杜恩";
// var b = f("jiangli");
// b("sssss");
var err = "这是错误"
var result = "解雇"
function fun(err,result,callback) {
    var str =result+err;
    callback(str);
}



fun(err,result,function (result) {
    console.log(result);
});



const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/user');
const db = mongoose.connection;

db.on("error",console.error.bind(console,'connection error'));

db.once("open",function(){
    console.log("hello")
});
console.log("A");
button


