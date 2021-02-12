import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {task} from '../../src/task'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  constructor(private http:HttpClient) { }

  getTasks():Observable<task[]>{
       return this.http.get<task[]>("http://localhost:3000/api/allTask")
  }

  addTask(newTask:task){
    console.log(newTask)
    console.log(JSON.stringify(newTask))
    var headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
    // headers.append('Content-Type','applications/json')
    console.log(headers)
    return this.http.post("http://localhost:3000/api/addTask",JSON.stringify(newTask),{headers:headers}).subscribe()

  }

  removeTasks(id:string){
    console.log("*****id****"+id)
    var headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
    return this.http.delete("http://localhost:3000/api/deleteTask/"+id,{headers:headers,responseType:"text"}).subscribe((res)=>{
      console.log(res)
    })
  }
  updateStatus(updateTask:any){
    console.log(updateTask)
    var headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('Access-Control-Allow-Origin', '*');
     return this.http.put("http://localhost:3000/api/updateTask/"+updateTask._id,JSON.stringify(updateTask),{headers:headers}).subscribe()
  }
}
