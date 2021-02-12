const { query } = require('express')
var express = require('express')
var router = express.Router()
var task = require("../db/schema/task")


router.get('/task/:id',async(req,res,next)=>{
    //console.log(req.params)
    const tasks = await task.findOne({_id: req.params.id})
    res.send(tasks)
    
})

router.get('/allTask',async(req,res,next)=>{
    const allTasks = await task.find()
    res.send(allTasks)
    
})

router.post('/addTask',async(req,res)=>{
    const newTask = new task(req.body)
    await newTask.save()
    res.send({newTask})
})

router.put('/updateTask/:id',async(req,res)=>{
    const updateTask = await task.findByIdAndUpdate({_id: req.params.id},)
    // res.send(updateTask.title)
    if(updateTask.title != req.body.title){
        updateTask.title = req.body.title
    }
    if(updateTask.isDone != req.body.isDone){
        updateTask.isDone = req.body.isDone
    }
    await updateTask.save()
    res.send(updateTask)

})
router.delete('/deleteTask/:id',async (req,res)=>{
    const deleteTask = await task.findByIdAndDelete({_id: req.params.id})
    if(!deleteTask)
    {
        res.send("error")
    }else{
    //await deleteTask.save()
    res.send("Deleted!")
    }
})


module.exports = router