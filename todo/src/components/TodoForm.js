import React, { useState } from 'react';


const TodoForm = () => {
  const [formInput, setFormInput] = useState('Enter Task')


  const handleChamge = e => {
    setFormInput(e.target.value)
    // console.log(e.target.value)
    // console.log(formInput)
  }

  const handleSubmit = e => {
    e.preventDefault();
    setFormInput('Enter Task');
    // console.log(`${formInput} submitted`)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Task:
        <input type='text' name='item' value={formInput} onChange={handleChamge} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    </div>
  )
}

export default TodoForm;