import React from 'react'
import { UseTodo } from '../../Context/Context'
import ContentFooter from './ContentFooter';
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

   <ContentFooter/>
</section>

  )
}

export default List