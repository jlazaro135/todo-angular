import { Component, Input } from '@angular/core';
import { Tasks } from './../../assets/tasks'

@Component({
  selector: 'app-task-row',
  templateUrl: './task-row.component.html',
  styleUrls: ['./task-row.component.css']
})
export class TaskRowComponent {
  @Input() task!: Tasks;
}
