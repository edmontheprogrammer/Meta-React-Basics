import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// this is a header component that returns an <h1> html element
function Header() {
  return <h1>Hello world</h1>
}

// this is the root compoenent which is rundering a blank page 
function App() {
 
  /*
    Note 1: We use the jsx syntax to render compoenents.
  In order for a compoennt to render something on the page, it needs 
  to return one or more JSX elements. 
    * React understands jsx 
  */
  return <Header/>;
}

export default App
