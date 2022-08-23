

 export interface todo {
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
     todos: Todo[]
     setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
 }