import React from 'react'

const Form = (props) => {

  return (
    <div>
        <input 
        type="text"
        onChange={props.handleInputChange} 
        placeholder='Enter a todo...'
        />
        <button onClick={props.addTask} type="submit">Add</button>
       
    </div>

  )
}

export default Form