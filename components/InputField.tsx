import { todo } from "../interfaces/todo";

const InputField = ({ todo, setTodo }:todo) => {
  return (
    <div className="main">
      <span>
        <input type="text" />
        <button className="ms-3 btn btn-primary rounded-pill">Submit</button>
      </span>
    </div>
  );
};
export default InputField;
