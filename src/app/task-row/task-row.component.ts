import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { Task, tasks } from './../../assets/tasks'

@Component({
  selector: 'app-task-row',
  templateUrl: './task-row.component.html',
  styleUrls: ['./task-row.component.css']
})
export class TaskRowComponent {
  @Input() task!: Task;

  toggleTasksStatus(){
    const foundTask: Task | undefined = tasks.find(t => t.id === this.task.id)
    if(foundTask?.isDone){
      foundTask.isDone = false
      return
    } 
    if(foundTask){
      foundTask.isDone = true
    } 
  }

  deleteTask(){
    const foundTask: Task | undefined = tasks.find(t => t.id === this.task.id)
    if(foundTask){
      foundTask.isDeleted = true
    }
  }
}
