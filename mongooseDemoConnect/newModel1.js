const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/runoob");
const db = mongoose.connection;


var numberSchema = new Schema({
    integerOnly:{
        type:Number,
        get:v => Math.round(v),
    set:v => Math.round(v),
    alias:'i'
    }
});
console.log(numberSchema);