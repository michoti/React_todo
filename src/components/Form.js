import React from 'react'

const Form = ({input, setInput, todos, setTodos}) => {

    const onInputChange = (e) => {
        setInput(e.target.value);
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <form onSubmit={onFormSubmit}>
        <input 
        type="text" 
        placeholder='Enter a todo...'
        value={input}
        onChange={onInputChange}
        required
        />
        <button type="submit">Add</button>
    </form>
  )
}

export default Form