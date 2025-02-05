import React, { useState, useReducer } from 'react';

//Component Imports
import TodoItem from './TodoItem'
import TodoForm from './TodoForm';
//Import Reducer
import { initialState, reducer } from '../reducers/todoReducer';

const TodoList = () => {
  const [formInput, setFormInput] = useState('Enter Task')
  const [{ todo }, dispatch] = useReducer(reducer, initialState)

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_ITEM', payload: formInput });
    setFormInput('Enter Task');
    // console.log(`${formInput} submitted`)
  }

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({ type: 'CLEAR_COMPLETED' })
  }

  return (
    <div>
      {/* TodoForm.js share state */}
      <TodoForm
        formInput={formInput}
        handleSubmit={handleSubmit}
        setFormInput={setFormInput}
      />
      {/* Map over List to render TodoItem */}
      {todo.map(entry =>
        <TodoItem
          item={entry.item}
          completed={entry.completed}
          key={entry.id}
          id={entry.id}
          dateCompleted={entry.timeCompleted}
          // completedBox={completedBox}
          toggleCheck={() => {
            dispatch({ type: 'TOGGLE_COMPLETED', payload: entry.id })
            console.log(entry.id)
          }}
        />
      )}
      <button onClick={clearCompleted}>Clear Completed
      </button>
    </div>
  )
}

export default TodoList;