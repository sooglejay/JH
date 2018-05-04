const mongoose = require("mongoose");

const jhBolg = new mongoose.Schema({
    title:String,
    doc:String,
    meta:{
        createAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default:Date.now()
        }
    }
});

jhBolg.pre('save',function(next){
    if(this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    }
    else {
        this.meta.updateAt = Date.now();
    }
    next()
});

jhBolg.statics = {
    fetch:function(cb){
        return this.find({}).sort('meta.updateAt').exec(cb);
    },
    findById:function(id,cb){
        return this.findOne({}).exec(cb);
    }
};

const jhbolg = mongoose.model('jhBolg',jhBolg);

module.exports = jhbolg;


