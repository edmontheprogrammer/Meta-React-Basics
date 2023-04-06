import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LogInOutButton from './components/LogInOutButton'

function App() {

  return (
    <div className="App">

      <LogInOutButton isLoggedIn={false}/>
      
      
    </div>
  )
}

export default App
