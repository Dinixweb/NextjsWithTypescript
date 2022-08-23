import { singleTodo } from "../interfaces/todo"

const SingleItem = ({ todo,todos, key, setTodos }:singleTodo) => {
    return (
        <div className="main">
                <div key={key} className="row list p-3 bg-warning">
                        <div className="col-8 ">
                            <span className="todo">{todo.todo}</span>
                        </div>
                        <div className="col-4">
                             <span className="icon-edit ">edit</span>
                            <span className="icon-delete ms-2">delete</span>
                            <span className="icon-done ms-2">done</span>
                        </div>
            </div>
            
        </div>
    )
}
export default SingleItem