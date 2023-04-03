import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import InputComponent from './components/InputComponent'
import RegisterForm from './components/RegisterForm'


function App() {
  return (
    <div className="App">

    <InputComponent />
    <RegisterForm />
      
    </div>
  )
}

export default App
