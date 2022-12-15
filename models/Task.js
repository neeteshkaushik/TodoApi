const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name cannot be empty"],
        trim:true,
        maxLength:[20,"Name's maxlength can be 20"]
    },
    completed:{
        type:Boolean,
        default:false,
    }
});

const TaskModel = mongoose.model('Task',TaskSchema);

module.exports = TaskModel;