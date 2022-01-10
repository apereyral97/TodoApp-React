import React, { useEffect, useState } from 'react';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
    const [fade, setFade] = useState(false);
    const ChangeFade = () => {
        setFade( current => !current);
        setInterval(() => {
            handleDelete( todo.id);
        }, 700);
    }
    useEffect(() => {
    }, [fade])
    return (
        <li
            key={ todo.id }
            className='item animate__animated animate__backInDown'
        >
            <div className={ `item-container ${ fade && 'animate__animated animate__fadeOutLeft' } `}>
                <div className={ `content-todo ${ todo.done && 'complete' } `}>
                    <p 
                        // className={ ` ${ todo.done && 'complete' }` }
                        onClick={ () => { handleToggle( todo.id)} }
                    >
                        { todo.desc }
                    </p>
                </div>
                <button 
                    className="btn-delete"
                    onClick={ () => {
                        ChangeFade();
                    }}
                >
                    Delete
                </button>
            </div>
        </li>
    )
}
