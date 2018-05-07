// /*
// SchemaTypes 处理路径的定义 默认值，验证，setter方法，字段选择默认
// 以下是mongoose中的所有有效SchemaTypes
//  */
//
// const schema =new Schema({
//     name:String,
//     binary:Buffer,
//     living:Boolean,
//     updated:{type:Date,default:Date.now},
//     age:{type:Number,min:18,max:65},
//     mixe:Schema.Types.ObjectId,
//     _someId:Schema.Types.Decimal128,
//     array:[],
//     ofString:[String],
//     ofNumber:[Number],
//     ofDates:[Date],
//     ofBuffer:[Buffer],
//     ofBoolean:[Boolean],
//     ofMixed:[Schema.Types.Mixed],
//     ofObjectId:[Schema.Tyoes.Object],
//     ofArrays:[[]],
//     ofArrayOfNumbers:[[Number]],
//     nested:{
//         stuff:{type:String,lowercase:true,trim:true}
//     }
// })
//
// //example use
//
// const Thing = mogoose.model('Thing',schema);
// const m = new Thing;
// m.name = 'Statue of Liberty';
// m.age =125;
// m.updated = new Date;
// m.binary = new Buffer(0);
// m.living = false;
// m.mixed = {any:{thing:'i want'}};
// m.markModified('mixed');
// m._someId = new mongoose.Types.ObjectId;
// m.array.push(1);
// m.ofString.push("strings!");
// m.ofNumber.unshift(1,2,3,4);
// m.ofDates.addToSet(new Date);
// m.ofBuffer.pop();
// m.ofMixed = [1,[],'three',{four:5}];
// m.nested.stuff = 'good';
// m.save(callback);
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/myapp');

var personSchema = Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    age: Number,
    stories: [{ type: Schema.Types.ObjectId, ref: 'Story' }]
});

var storySchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Person' },
    title: String,
    fans: [{ type: Schema.Types.ObjectId, ref: 'Person' }]
});

var Story = mongoose.model('Story', storySchema);
var Person = mongoose.model('Person', personSchema);


var author = new Person({
    _id: new mongoose.Types.ObjectId(),
    name: 'Ian Fleming',
    age: 50
});

author.save(function (err) {
    if (err) return handleError(err);

    var story1 = new Story({
        title: 'Casino Royale',
        author: author._id    // assign the _id from the person
    });

    story1.save(function (err) {
        if (err) return handleError(err);
        // thats it!
    });
});