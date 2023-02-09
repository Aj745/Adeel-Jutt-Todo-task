import React from 'react'

export default function Todo ({todo,onDelete}) {
  return (
    <div>
      <h5>
        {todo.title}
      </h5>
      <p>
        {todo.description}
      </p>
      <button className="btn btn-sm btn-danger my-3"  onClick={()=>onDelete(todo)}>Delete</button><hr/>
    </div>
  )
}
