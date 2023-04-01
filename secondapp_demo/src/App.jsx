import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from "./components/Heading";



/*
  Step 1: 
  This is the App compoenent which returns an html "<div>" element plus the "<Heading />" component that we 
  created above. 

 "
*/
function App() {
  
  return (
    <div className='App'>
        This is the starting code for "Your first component" 
        <Heading />
    </div>
  )
  
}

export default App;
