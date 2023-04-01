import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Heading from './compoenents/Heading'
import './App.css'

function App() {
  return (
    <div className="App">
        <Heading firstName="Bob" />
        <Heading firstName="Jack" />
    </div>
  );
}

export default App;
