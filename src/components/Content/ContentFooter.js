import React from 'react'
import { UseTodo } from '../../Context/Context'

function ContentFooter() {

    const {todos,filter}=UseTodo()
  return (
    <footer className="footer">
		<span className="todo-count">
			<strong>{todos.length} </strong>
			item{todos.length>1 && "s"} left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" className={filter==="all" ? "selected":""}>All</a>
			</li>
			<li>
				<a href="#/"  className={filter==="active" ? "selected":""}>Active</a>
			</li>
			<li>
				<a href="#/"  className={filter==="completed" ? "selected":""}>Completed</a>
			</li>
		</ul>

		<button className="clear-completed">
			Clear completed
		</button>
	</footer>
  )
}

export default ContentFooter