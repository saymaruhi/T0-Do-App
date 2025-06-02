import React from 'react'

function ToDoList(props) {
  return (
   <div className='list-container'>
    <li className='list-item'>
        
        {props.item}
        <span className='icons'>
            <i className="fa-solid fa-trash-can icon-delete"
            onClick={(e)=> {
                props.deleteItem(props.index)
             } }></i>
        </span>
    </li>
   </div>
  )
} 

export default ToDoList