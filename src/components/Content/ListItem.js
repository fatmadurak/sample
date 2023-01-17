import React from 'react'
import { UseTodo } from '../../Context/Context'

function ListItem({todo}) {

    const{deleteTodo}=UseTodo();
  
    const onDestroy=(id)=>{
        deleteTodo(id);
    }
  
  return (

    <li className={todo.completed ? "completed":""}>
            <div className="view">
                <input className="toggle" type="checkbox" checked={todo.completed} />
                <label>{todo.text}</label>
                <button className="destroy" onClick={()=>onDestroy(todo.id)}></button>
            </div>
        </li>
  )
}

export default ListItem