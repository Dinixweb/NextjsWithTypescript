import React from "react"

 export interface todo {
     todo: string
     setTodo:React.Dispatch<React.SetStateAction<string>>
}