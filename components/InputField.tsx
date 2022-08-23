import { useRef } from "react";
import { todo } from "../interfaces/todo";

const InputField = ({ todo, setTodo, handleAddTask }: todo) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div className="main">
      <span>
        <input type="text" ref={inputRef} value={todo} onChange={(e)=>setTodo(e.target.value)} />
        <button className="ms-3 btn btn-primary rounded-pill" onClick={handleAddTask}>Submit</button>
      </span>
    </div>
  );
};
export default InputField;
