var mongoose = require('mongoose');


var Schema =mongoose.Schema;


var toDoSchema = Schema({
    username:String,
    todo:String,
    isDone:Boolean,
    hasAttachment:Boolean
});

var toDos = mongoose.model('toDos',toDoSchema);


module.exports=toDos;