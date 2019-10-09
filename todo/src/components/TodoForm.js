import React, { useState, useReducer } from 'react';

import { initialState, reducer } from '../reducers/todoReducer';

const TodoForm = (props) => {
  // const [{ todo }, dispatch] = useReducer(reducer, initialState)

  const handleChamge = e => {
    props.setFormInput(e.target.value)
    // console.log(e.target.value)
    // console.log(formInput)
  }



  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label>Task:
        <input type='text' name='item' value={props.formInput} onChange={handleChamge} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default TodoForm;