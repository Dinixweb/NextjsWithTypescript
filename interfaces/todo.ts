import React from "react"

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