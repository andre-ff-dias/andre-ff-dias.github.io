import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine, RiCheckboxCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = value => {
        updateTodo(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} >
                {todo.text}
            </div>
            <div className="todo-icons"> 
                { !todo.isComplete ? (<>
                    <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className="todo-edit-icon" />
                    <RiCheckboxCircleLine onClick={() => completeTodo(todo.id)} className="todo-complete-icon"/>
                    </>)  :
                    null
                }   
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className="todo-delete-icon" />
            </div>
        </div>
    ));
}

export default Todo;
