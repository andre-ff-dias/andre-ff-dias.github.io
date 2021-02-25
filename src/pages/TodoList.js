import React, { useState } from 'react';
import TodoForm from '../components/Todo/TodoForm'

function List() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);
    };

    return (
        <div className="Todo-List">
            <h1>What's the Plan for Today?</h1>
            <TodoForm onSubmit={addTodo}/>
        </div>
    );
}

export default List;
