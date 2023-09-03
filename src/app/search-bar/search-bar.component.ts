import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { tasks, Task } from './../../assets/tasks'
import { setItem } from './../../assets/localStorage'


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements AfterViewInit {
  inputValue: string = '';
  checkboxValue: boolean  = false

  constructor(
    private renderer2: Renderer2,
    private elementRef: ElementRef
  ) {}

  getValue() {
    const root = this.elementRef.nativeElement
    const input = this.renderer2.selectRootElement('input', root);
    if(this.inputValue.trim() === ''){
      this.renderer2.setStyle(input, 'box-shadow', '0 0 10px red');
      return
    }
    let lastTaskId: number =  tasks.length > 0 ? tasks[tasks.length - 1].id : 0;
    const id = lastTaskId + 1;
    let text = this.inputValue;
    let priority = this.checkboxValue
    const newTask: Task = new Task(id, text, priority);
    tasks.push(newTask);
    setItem(tasks)
    this.inputValue = '';
    this.checkboxValue = false
  }

  ngAfterViewInit() {
    const input = this.renderer2.selectRootElement('input', this.elementRef.nativeElement);

    this.renderer2.listen(input, 'focus', () => {
      this.renderer2.removeStyle(input, 'box-shadow');
    });

  }
}
