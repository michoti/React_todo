import './App.css'
import { useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"
import List from './components/List'

const App = () => {

    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);

    };

    const addTask = () => {
        const task = {
            id : todo.length === 0 ? 1: todo[todo.length - 1].id + 1,
            taskName: input,
        };

        setTodo([...todo, task]);
    };

    const deleteTask = (id) => {
        setTodo(todo.filter(task => task.id !== id));
    };
    
  return (
    <div>
        <div>

            <input onChange={handleInputChange} />
            <button onClick={addTask} >Add</button>



            <div>
                <Header />
            </div>

            <div>
              <Form />
            </div>
            <div>
                {todo.map((task) => {
                    return (
                        <List taskName={task.taskName} id={task.id} deleteTask={deleteTask} />
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default App