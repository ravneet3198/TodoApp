var mongoose = require('mongoose')

var taskSchema = mongoose.Schema({
    title:String,
    isDone:Boolean
})


var task=mongoose.model("tasks",taskSchema)

module.exports = task