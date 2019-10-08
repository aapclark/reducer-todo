import React, { useState, useReducer } from 'react';

//Component Imports
import TodoItem from './TodoItem'
//Import Reducer
import { initialState, reducer } from '../reducers/todoReducer';

const TodoList = () => {
  const [{ todo }, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      {/* TodoForm.js share state */}
      {/* Map over List to render TodoItem */}
      {todo.map(entry =>
        <TodoItem
          item={entry.item}
          completed={entry.completed}
          key={entry.id}
          id={entry.id}
        />
      )}
    </div>
  )
}

export default TodoList;