import { Component, OnInit } from '@angular/core';
import { task } from 'src/task';
import {TaskserviceService} from '../taskservice.service'
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  public tasks!:any[]
  public title!:string
  constructor(private taskservice:TaskserviceService) { }

  ngOnInit(): void {
    this.taskservice.getTasks().subscribe((data)=>{
      console.log(data)
      this.tasks = data
      console.log(this.tasks)
    })
  
  }

  addTask(event:Event){
    event.preventDefault()
    console.log(this.title)
    var newTask:task={
      title:this.title,
      isDone:false
    }
    this.taskservice.addTask(newTask)
    this.tasks.push(newTask)
    this.title=""
  }

  deleteTask(id:any){
    var allTasks = this.tasks
    const index = this.tasks.findIndex((one)=>{
         return one._id == id
    })
    this.tasks.splice(index,1)
    this.taskservice.removeTasks(id)
  }

  updateTask(id:string){
    const index = this.tasks.findIndex((one)=>{
    return one._id == id
 })
    var currentStatus = this.tasks[index].isDone
    console.log(currentStatus)
    this.tasks[index].isDone = !currentStatus
    console.log(this.tasks)
    this.taskservice.updateStatus(this.tasks[index])

  }


}
