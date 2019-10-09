import React, { useState, useReducer } from 'react';

import { initialState, reducer } from '../reducers/todoReducer';


const TodoItem = props => {
  // const [{ todo }, dispatch] = useReducer(reducer, initialState)
  const [completedBox, setCompletedBox] = useState(false)

  const handleCheckboxChange = () => {
    props.toggleCheck();
    setCompletedBox(!completedBox)
  }


  return (
    <div>
      <h4>{props.item}</h4>
      <p>Completed: {`${props.completed}`}</p>
      <form>
        <label>
          Completed:
        <input
            name='completed'
            type='checkbox'
            checked={props.completedBox}
            onChange={handleCheckboxChange}
          />
        </label>
      </form>
    </div>
  )
}

export default TodoItem; 