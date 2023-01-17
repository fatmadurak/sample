import { createContext,useContext,useState } from "react";
import {v4 as uuidv4} from "uuid";


const TodoContext=createContext();


export const TodoProvider=({children})=>{

const [filter]=useState("all")
const[todos,setTodos]=useState([{

id:1,
text:"Learn React",
completed:true,

}])


const addTodo=(text)=>{

setTodos(prev=>[...prev,{id:uuidv4(),text,completed:false}])

}

const deleteTodo=(id)=>{

const clone_todos=[...todos]

const index=clone_todos.findIndex((todo)=>todo.id===id)

clone_todos.splice(index,1)

setTodos(clone_todos)



}

const toggleTodo=(id)=>{

    const clone_todos=[...todos]
    const index=clone_todos.findIndex((todo)=>todo.id===id)
    clone_todos[index].completed=!clone_todos[index].completed
    setTodos(clone_todos)
   

}

const values={

todos,
setTodos,
addTodo,
deleteTodo,
toggleTodo,
filter,

}

return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>

}


export const UseTodo=()=>{

const context=useContext(TodoContext);

if (context===undefined) {
    
  throw new Error("context is not founded")

}

return context;


}