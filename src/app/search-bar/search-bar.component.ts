import { Component, ViewChild, ElementRef } from '@angular/core';
import { tasks, Task } from './../../assets/tasks'


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  inputValue: string = '';

  getValue() {
    let lastTaskId: number =  tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
    const id = lastTaskId + 1;
    let text = this.inputValue;
    const newTask: Task = new Task(id, text, false);
    tasks.push(newTask);
    this.inputValue = '';
  }
}
