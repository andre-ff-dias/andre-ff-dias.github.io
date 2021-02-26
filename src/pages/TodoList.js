import React, { useState } from 'react';
import Todo from '../components/Todo/Todo';
import TodoForm from '../components/Todo/TodoForm'
import '../styles/Todo.css';

function List() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        //console.log(...todos);
    };

    const removeTodo = id => {
        const removeArray = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArray);
    };

    const updateTodo = (id, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item => (item.id === id ? newValue : item)));
    };
    
    const completeTodo = id => {
        let updatedTodos  = todos.map( todo => {
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodos );
    };
    
    return (
        <div className="Todo">
            <div className="Todo-List">
                <h1>What's the Plan for Today?</h1>
                <TodoForm onSubmit={addTodo} />
                <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
            </div>
        </div>        
    );
}

export default List;
