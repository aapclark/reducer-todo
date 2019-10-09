
export const initialState = {
  todo: [{
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Learn about reducers again',
    completed: false,
    id: 38929875895
  }]

}

export const reducer = (state, action) => {


  switch (action.type) {
    case 'ADD_ITEM':
      const newItem = {
        item: action.payload,
        completed: false,
        id: Date.now()
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
            return { ...entry, completed: !entry.completed }
          else {
            return entry
          }
        })
      }
    default:
      return state;
  }

} 