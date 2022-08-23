import { todoList } from "../interfaces/todo"
import SingleItem from "./SingleItem"

const TodoList = ({todos, setTodos}:todoList) => {
    return <div className="main">
        {todos.map((todo) =>(
            <SingleItem todo={todo} todos={todos} key={todo.id} setTodos={setTodos} />
        ))}
    </div>
}
export  default TodoList