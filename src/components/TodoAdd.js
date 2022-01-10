import React from 'react'
import { useForm } from '../hook/useForm';

export const TodoAdd = ({ handleAddTodo }) => {
    const [ { description }, handleInputChange, reset] = useForm({
        description: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (description.trim().length <= 1) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }
        handleAddTodo( newTodo );
        reset();
    }
    return (
        <>
            <form onSubmit={ handleSubmit } className='form-control'>
                <input 
                    type="text"
                    name='description'
                    className='form-text'
                    placeholder='Learn...'
                    autoComplete='off'
                    value={ description }
                    onChange={ handleInputChange }
                />
                <button 
                    type='submit'
                    className='btn-add'
                >
                    Add
                </button>
            </form>
        </>
    )
}
