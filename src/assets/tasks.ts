export interface Task {
    id: number,
    text: string,
    isDone: boolean,
    isPriority: boolean,
    isDeleted: boolean
}

export const tasks:Task[] = []

export class Task {
    constructor(id: number, text: string, isPriority: boolean, isDone: boolean = false, isDeleted: boolean = false) {
        this.id = id;
        this.text = text;
        this.isPriority = isPriority;
        this.isDone = isDone;
        this.isDeleted = isDeleted;
      }
} 