const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/user');
const db = mongoose.connection;

db.on("error",console.error.bind(console,'connection error'));

db.once("open",function(){
    console.log("hello")
});

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/user');
//
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function(err,client) {
//     // we're connected!
//     // console.log("hello");
//     console.log(client);
//     console.log("成功连接到测试数据库！")
// });
//
// var KittySchema= mongoose.Schema({name:String});
// KittySchema.methods.speak = function () {
//     var greeting = this.name
//     ?"Meow name is "+this.name
//         :"I don't have a name";
//     console.log(greeting);
// };
// KittySchema.methods.hello = function () {
//     console.log("hello"+this.name);
// };
//
// var Kitten = mongoose.model('Kitten',KittySchema);
//
// var fluffy =  new Kitten({name:'flffy'});
// fluffy.speak();
// fluffy.hello();
//
// fluffy.save(function(err,fluffy){
//     if(err) return console.error(err);
//     fluffy.speak();
// });
//
// var silence = new Kitten({name:'Silence'});
// silence.speak();
// silence.hello();
// silence.save();
// // console.log(silence.name);
//
// Kitten.find(function (err,kittens) {
//     if(err)return console.log(err);
//     console.log(kittens);
// });

const schema = mongoose.Schema({name:String});

const col = mongoose.model('col',schema);

const doc = new col({name:"jiangli"});
console.log(doc.name)