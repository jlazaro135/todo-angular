import { Component } from '@angular/core';
import { tasks, Task } from './../assets/tasks'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  tasks: Task[]

  constructor(){
    this.tasks = []
  }

  ngOnInit(){
    this.tasks = tasks
    if(!localStorage.getItem('tasks')){
      let tasksStringified = JSON.stringify(this.tasks)
      localStorage.setItem('tasks', tasksStringified)
      return
    }
    
    let taskFromStorage = localStorage.getItem('tasks')
    if(taskFromStorage) {
      let parsedTasks: Task[] = JSON.parse(taskFromStorage)
      parsedTasks.forEach(function(t){
        tasks.push(t)
      })
    }
  }

  filterActiveTasks(){
    return tasks.filter(t => !t.isDeleted).length
  }

  EmptyOreveryTaskIsDeleted(){
    return tasks.length === 0 || tasks.every(t => t.isDeleted)
  }

  filterDoneTasks(){
    return tasks.filter(t => t.isDone && !t.isDeleted).length
  }

  filterDoneTasksPercentage(){
    let per = ((this.filterDoneTasks() / this.filterActiveTasks()) * 100)
    return !isNaN(per) ? per.toFixed(2) : '0.00'
  }
}
