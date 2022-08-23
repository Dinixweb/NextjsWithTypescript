import { singleTodo } from "../interfaces/todo"
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
const SingleItem = ({ todo,todos, key, setTodos }:singleTodo) => {
    return (
        <div className="main">
                <div key={key} className="row list p-3 bg-warning">
                        <div className="col-8 ">
                            <span className="todo">{todo.todo}</span>
                        </div>
                        <div className="col-4">
                             <span className="icon "><BiEdit size={25}/></span>
                            <span className="icon ms-2"><AiFillDelete size={25}/></span>
                            <span className="icon ms-2"><MdOutlineDone size={25}/></span>
                        </div>
            </div>
            
        </div>
    )
}
export default SingleItem