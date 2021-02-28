import React, { useState } from 'react';
import Todo from '../components/Todo/Todo';
import TodoForm from '../components/Todo/TodoForm'
import '../styles/Todo.css';

function List() {
    const [todos, setTodos] = useState(()=>{
        const savedTodos =  localStorage.getItem('savedTodos');
        if (!savedTodos) {
            return null;
        }
        return JSON.parse(savedTodos);
    });

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return;
        }
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        localStorage.setItem('savedTodos', JSON.stringify(newTodos));
        //console.log(JSON.parse(localStorage.getItem('savedTodos')));
        //console.log(...todos);
    };

    const removeTodo = id => {
        const removeArray = [...todos].filter(todo => todo.id !== id);
        setTodos(removeArray);
        localStorage.setItem('savedTodos', JSON.stringify(removeArray));
    };

    const updateTodo = (id, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev => prev.map(item => (item.id === id ? newValue : item)));
        localStorage.setItem('savedTodos', JSON.stringify(todos));
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
                <TodoForm onSubmit={addTodo} todos={todos} />
                <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
            </div>
        </div>        
    );
}

export default List;
