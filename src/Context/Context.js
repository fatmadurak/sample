import { createContext,useContext,useState } from "react";


const TodoContext=createContext();


export const TodoProvider=({children})=>{

const[todos,setTodos]=useState([{

id:1,
text:"Learn React",
completed:true,

}])

const values={

todos,
setTodos,

}

return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>

}


export const UseTodo=()=>{

const ontext=useContext(TodoContext);

if (context===undefined) {
    
  throw new Error("context is not founded")

}

return context;


}