import React from 'react'
import { UseTodo } from '../../Context/Context'

function ListItem({todo}) {

    const{deleteTodo,toggleTodo}=UseTodo();
  
    const onDestroy=(id)=>{
        deleteTodo(id);
    }
  
    const onChange=(id)=>{

        toggleTodo(id)

    }


  return (

    <li className={todo.completed ? "completed":""}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={todo.completed}  onChange={()=>onChange(todo.id)}/>
                <label>{todo.text}</label>
                <button className="destroy" onClick={()=>onDestroy(todo.id)}></button>
            </div>
        </li>
  )
}

export default ListItem