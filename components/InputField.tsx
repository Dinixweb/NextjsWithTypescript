import { useRef } from "react";
import { todoModel } from "../interfaces/todo";

const InputField = ({ todo, setTodo, handleAddTask }: todoModel) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div className="main">
      <span>
        <input type="text" className="addTaskInput" ref={inputRef} value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button className="ms-3 btn btn-warning rounded-pill" onClick={handleAddTask}>Submit</button>
      </span>
    </div>
  );
};
export default InputField;
