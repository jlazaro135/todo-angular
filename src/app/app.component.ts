import { Component } from '@angular/core';
import { tasks, Tasks } from './../assets/tasks'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  tasks: Tasks[]

  constructor(){
    this.tasks = []
  }

  ngOnInit(){
    this.tasks = tasks
  }
}
