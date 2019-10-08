import React from 'react';


const TodoItem = props => {


  return (
    <div>
      <h4>{props.item}</h4>
      <p>Completed: {`${props.completed}`}</p>
    </div>
  )
}

export default TodoItem; 