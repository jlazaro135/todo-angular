import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { Task, tasks } from './../../assets/tasks'

@Component({
  selector: 'app-task-row',
  templateUrl: './task-row.component.html',
  styleUrls: ['./task-row.component.css']
})
export class TaskRowComponent {
  @Input() task!: Task;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  toggleTasksStatus(e: Event){
    const taskRow = this.elementRef.nativeElement.querySelector(`#task-${this.task.id}`);
    const foundTask: Task | undefined = tasks.find(t => t.id === this.task.id)
    if(foundTask?.isDone){
      foundTask.isDone = false
      taskRow.classList.remove('bg-green-200', 'line-through');
      return
    } 
    if(foundTask){
      foundTask.isDone = true
      taskRow.classList.add('bg-green-200', 'line-through');
    } 
  }
}
