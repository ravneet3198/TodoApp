var mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/task-angular",{useNewUrlParser:true,useCreateIndex:true},(error,client)=>{
    if(error){
        console.log(error)
    }else{
        console.log("connected")
    }

})

