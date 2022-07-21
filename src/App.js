
import { useState } from "react"
import Form from "./components/Form"
import Header from "./components/Header"

const App = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);
  return (
    <div>
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} />
            </div>
        </div>
    </div>
  )
}

export default App