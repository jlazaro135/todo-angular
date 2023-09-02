import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-counter',
  templateUrl: './task-counter.component.html',
  styleUrls: ['./task-counter.component.css']
})
export class TaskCounterComponent {
  @Input() tasksCount!: number;
}
