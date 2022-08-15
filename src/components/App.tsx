import { useState, useEffect, useRef } from "react";
import { TodoList } from "./TodoList";
import { ITodo } from "../types/data";

const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const addTodo = () => {
        if (value) {
            setTodos([...todos, { //TODO - убрать эти точки и посмотреть что будет  
                id: Date.now(),
                title: value,
                completed: false
            }]);
            setValue('')
        }
    }

    return (
        <div className="App box">
            <div>
                <input value={value} onChange={e => setValue(e.target.value)} className="input is-link" type="text" placeholder="Text input" />
                <button onClick={addTodo} className="button is-info">ADD</button>
            </div>

            <TodoList items={todos} />

        </div>
    );
}

export { App };