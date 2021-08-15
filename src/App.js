import React, {useState} from 'react';
import './styles/App.css';
import Counter from './components/counter'

function App() {
  return (
    <div className="App">
      <h1>React Counter</h1>
      <Counter />
    </div>
  );
}

export default App;
