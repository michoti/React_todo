import React from 'react'

const List = (props) => {
  return (
     <div style={{backgroundColor: props.completed ? "green" : "white"}}>
        <h1>{props.taskName}</h1>
        <button onClick={() => props.completedTask(props.id)} >Completed</button>
        <button onClick={() => props.deleteTask(props.id)} >Delete</button>
    </div>
  )
}

export default List