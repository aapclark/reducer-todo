import React, { useState } from 'react';
import moment from 'moment';


const TodoItem = props => {

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
      <div>
        <p>Date Completed: {moment(props.dateCompleted).format('MMMM Do YYYY, h:mm a')}</p>
      </div>
    </div>
  )
}

export default TodoItem; 