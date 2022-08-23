import { singleTodo, Todo } from "../interfaces/todo"
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
const SingleItem = ({ todo, todos, key, setTodos }: singleTodo) => {

    const handleDone = (id: number) => {
        setTodos(todos.map((data) => 
             data.id === id?{ ...data,isDone:!data.isDone}:todo
        ))
    }

    const handleDelete = (id: number) => {
        let obj = todos.filter((item) => item.id !== id)
        setTodos(obj)
    }
    const handleEdit = (todo:Todo) => {
        
    }

    return (
        <div className="main">
                <div key={key} className="row list p-3 bg-warning">
                        <div className="col-8 ">
                            {todo.isDone? (<s className="todo">{todo.todo}</s>):(<span className="todo">{todo.todo}</span>)}
                        </div>
                        <div className="col-4">
                             <span className="icon "><BiEdit size={25}/></span>
                            <span className="icon ms-2"><AiFillDelete size={25} onClick={()=>handleDelete(todo.id)}/></span>
                            <span className="icon ms-2"><MdOutlineDone size={25} onClick={()=>handleDone(todo.id)} /></span>
                        </div>
            </div>
            
        </div>
    )
}
export default SingleItem