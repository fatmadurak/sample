import { createContext,useContext,useState } from "react";


const 

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


<


}