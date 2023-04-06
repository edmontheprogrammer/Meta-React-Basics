import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import logo from "./assets/logo.jpg"
function App() {

  return (
    <div className="App">
      <h1>Task: Add an image below</h1>
      <img src={logo} alt="Logo" 
        height={200}

      />
      
    </div>
  )
}

export default App
