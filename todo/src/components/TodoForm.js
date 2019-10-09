import React from 'react';



const TodoForm = (props) => {

  const handleChamge = e => {
    props.setFormInput(e.target.value)
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