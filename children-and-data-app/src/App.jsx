import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './compoenents/Child'

function App() {

  const date = new Date();

  return (
    <div className="App">
        <Child message={date.toLocaleTimeString()} />
    </div>
  );
}

export default App
