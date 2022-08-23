import { singleTodo, Todo } from "../interfaces/todo";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { VscSaveAs } from "react-icons/vsc";
import { useState, useRef } from "react";
import { useEffect } from "react";
const SingleItem = ({ todo, todos, key, setTodos }: singleTodo) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [enableEdit, setEnableEdit] = useState<boolean>(false);
  const [editValue, setEditValue] = useState<any>();

  /**
   * This method will handle done action
   * @param id
   */
  const handleDone = (id: number) => {
      console.log(id)
      let checkStatus = todos.filter((obj) => {
          if (obj.id === id) {
              console.log("value true")
              obj.isDone = !obj.isDone
          }
          return obj
      })
      setTodos(checkStatus)
  };

  /**
   * This method will handle delete action
   * @param id
   */
  const handleDelete = (id: number) => {
    let obj = todos.filter((item) => item.id !== id);
    setTodos(obj);
  };

  /**
   * this will handle edit action
   * @param todo
   */
  const handleEdit = (todo: Todo) => {
    setEnableEdit(true);
    setEditValue(todo.todo);
  };
    
  /**
   * this method will save edited value
   * @param id 
   */
  const handlSave = (id: number) => {
      setEnableEdit(false);
      let editedValue = todos.filter((obj) => {
          if (obj.id === id) {
               obj.todo=editValue
          }
          return obj
      })
      setTodos(editedValue)
  };


useEffect(() => {
    if (enableEdit) {
        inputRef.current?.focus()
    }
    
 },[enableEdit])

  return (
    <div className="main">
      <div key={key} className="row list p-3 bg-warning">
        <div className="col-8 ">
          {todo.isDone ? (
            <s className="todo">{todo.todo}</s>
          ) : enableEdit ? (
            <span className="todo">
              <input
                type="text"
                ref={inputRef}
                className="editInput"
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
              />
            </span>
          ) : (
            <span className="todo">{todo.todo}</span>
          )}
        </div>
        <div className="col-4">
          <span className="icon ">
            {enableEdit ? (
              <VscSaveAs
                size={25}
                onClick={() => {
                  handlSave(todo.id);
                  inputRef.current?.readOnly;
                }}
              />
            ) : (
              <BiEdit
                size={25}
                onClick={() => {
                    handleEdit(todo)
                    
                }}
              />
            )}
          </span>
          <span className="icon ms-2">
            <AiFillDelete size={25} onClick={() => handleDelete(todo.id)} />
          </span>
          <span className="icon ms-2">
            <MdOutlineDone size={25} onClick={() => handleDone(todo.id)} />
          </span>
        </div>
      </div>
    </div>
  );
};
export default SingleItem;
