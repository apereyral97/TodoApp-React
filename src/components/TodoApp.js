import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import '../scss/style.css';
const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {
    const [todos, dispatch ] = useReducer(todoReducer, [], init );
    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])

    const handleDelete = ( todoId ) => {
        
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );
    }

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }
    const handleToggle = ( todoId ) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    return (
        <div>
            <div className='title-container'>
                <h3 className='h3-heading'>.ToDo</h3>
                <p>Tasks { todos.length }</p>
            </div>
            <div className='wrapper'>
                <TodoAdd 
                   handleAddTodo = { handleAddTodo }
                 />
                    <TodoList 
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                
                     
            </div>
        </div>
    )
}
