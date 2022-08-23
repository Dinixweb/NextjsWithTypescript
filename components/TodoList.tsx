import { Todo, todo,todoList } from "../interfaces/todo"

const TodoList = ({todos, setTodos}:todoList) => {
    return <div className="main">
        {todos.map((e) =>(
            <li key={e.id}>{e.todo}</li>
        ))}
    </div>
}
export  default TodoList