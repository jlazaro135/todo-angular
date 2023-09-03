import { Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { Task, tasks } from './../../assets/tasks'
import { setItem } from './../../assets/localStorage'
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-task-row',
  templateUrl: './task-row.component.html',
  styleUrls: ['./task-row.component.css']
})
export class TaskRowComponent {
  @Input() task!: Task;

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef
  ) {}

  toggleTasksStatus(): void{
    const foundTask: Task | undefined = tasks.find(t => t.id === this.task.id)
    if(foundTask?.isDone){
      foundTask.isDone = false
      let tasksStringified = JSON.stringify(tasks)
      localStorage.setItem('tasks', tasksStringified)
      return
    } 
    if(foundTask){
      foundTask.isDone = true
      this.surprise()
      let tasksStringified = JSON.stringify(tasks)
      localStorage.setItem('tasks', tasksStringified)
    } 
  }

  deleteTask(): void{
    const foundTask: Task | undefined = tasks.find(t => t.id === this.task.id)
    if(foundTask){
      foundTask.isDeleted = true
      setItem(tasks)
    }
  }
  
  surprise(): void {
    const canvas = this.renderer2.createElement('canvas');
 
    this.renderer2.appendChild(this.elementRef.nativeElement, canvas);
 
    const myConfetti = confetti.create(canvas, {
      resize: true,    
    });

    myConfetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
 
    myConfetti();

    setTimeout(() => canvas.remove(), 1500);
  }
}
