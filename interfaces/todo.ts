

 export interface todoModel {
     todo: string
     setTodo: React.Dispatch<React.SetStateAction<string>>
     handleAddTask:()=>void
 }

export interface Todo {
    id: number;
    todo: string;
    isDone:boolean
}
 
export interface todoList {
    todos: Todo[];
     setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
 
export interface singleTodo {
    todo: Todo
    todos: Todo[];
    key: number;
    isDone?: boolean
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
 }