var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/runoob');

var db = mongoose.connection;

db.on("error",console.error.bind(console,'connection error'));

db.once("open",function () {
    console.log('打开了');
});

var kittySchema = mongoose.Schema({
    name:String
});

var kitten = mongoose.model('Kitten',kittySchema);
var silence =new kitten({name:"Silence"});

console.log(silence.name);