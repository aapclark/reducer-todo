import React from 'react';
import './App.css';

import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Reducer ToDo List</h1>
      </header>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;
