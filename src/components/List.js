import React from 'react'

const List = (props) => {
  return (
     <div>
        <h1>{props.taskName}</h1>
        <button onClick={() => props.deleteTask(props.id)} >Delete</button>
    </div>
  )
}

export default List