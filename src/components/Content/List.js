import React from 'react'
import { UseTodo } from '../../Context/Context'
import ListItem from './ListItem';

function List() {

    const {todos}=UseTodo();
  return (
    <section className="main">
  

    <ul className="todo-list">
       {
           todos.map((todo)=>(
            <ListItem key={todo.id} todo={todo}/>
           )

           )

       }
   </ul>
</section>

  )
}

export default List