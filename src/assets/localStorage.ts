import { Task } from './tasks'

export function setItem(tasks: Task[]) : void{
    let tasksStringified = JSON.stringify(tasks)
    localStorage.setItem('tasks', tasksStringified)
}

