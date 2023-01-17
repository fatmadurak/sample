import React from 'react'

function ListItem({todo}) {
  return (

    <li className="completed">
            <div className="view">
                <input className="toggle" type="checkbox" />
                <label>{todo.text}</label>
                <button className="destroy"></button>
            </div>
        </li>
  )
}

export default ListItem