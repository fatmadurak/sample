import React from 'react'
import { UseTodo } from '../../Context/Context'
import ContentFooter from './ContentFooter';
import ListItem from './ListItem';

let filtered=null;
function List() {
    
    const {todos,filter}=UseTodo();
    filtered=[...todos]
  
    if (filter!=="all") {
      
   
      filtered=todos.filter((todo)=>filter=="active" ? todo.completed===false && todo :todo.completed===true && todo)


    }
    

  return (
    <section className="main">
 
    


    <ul className="todo-list">
       {
           filtered.map((todo)=>(
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