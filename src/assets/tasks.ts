export interface Task {
    id: number,
    text: string,
    isDone: boolean,
    isPriority: boolean,
    isDeleted: boolean
}

export const tasks:Task[] = [
    {
        id: 1,
        text: 'esto es una tarea',
        isPriority: false,
        isDone: false,
        isDeleted: false
    },
    {
        id: 2,
        text: 'esto es una tarea2',
        isPriority: false,
        isDone: false,
        isDeleted: false
    },
    {
        id: 3,
        text: 'esto es una tarea3',
        isPriority: false,
        isDone: false,
        isDeleted: false
    },
    {
        id: 4,
        text: 'esto es una tarea4',
        isPriority: false,
        isDone: false,
        isDeleted: false
    },
]