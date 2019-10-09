
export const initialState = {
  todo: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589,
    timeCompleted: ''
  },
  {
    item: 'Learn about reducers again',
    completed: false,
    id: 38929875895,
    timeCompleted: ''

  }]

}

export const reducer = (state, action) => {


  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = {
        item: action.payload,
        completed: false,
        id: Date.now(),
        timeCompleted: ''
      }
      console.log(`case ADD_ITEM, ${state.todo}`)
      console.log(state.todo)
      return {
        ...state,
        todo: [...state.todo, newItem]
      }
    case 'TOGGLE_COMPLETED':
      console.log(state.todo);
      return {
        ...state,
        todo: state.todo.map(entry => {
          if (entry.id === action.payload)
            return { ...entry, completed: !entry.completed, timeCompleted: Date.now() }

          else {
            return { ...entry, timeCompleted: '' }
          }
        })
      }
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todo: state.todo.filter(entry => entry.completed !== true)
      }

    default:
      return state;
  }

} 