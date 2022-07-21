
import { useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"

const App = () => {

    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);

    };

    const addTask = () => {
        const newTodoList = [...todo, input];
        setTodo(newTodoList);
    };

    const deleteTask = (taskName) => {
        setTodo();

    };
    
  return (
    <div>
        <div>

            <input onChange={handleInputChange} />
            <button onClick={addTask} >Add</button>



            {/* <div>
                <Header />
            </div> */}

            {/* <div>
              <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
            </div> */}
            <div>
                {todo.map((task) => {
                    return (
                        <div>
                            <h1>{task}</h1>
                            <button onClick={() => deleteTask(task)} >Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default App