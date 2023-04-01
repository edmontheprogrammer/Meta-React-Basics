import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// this is a header component that returns an <h1> html element
// Note 1: a react component is basically a Javascript function that 
// can return an item or something that react can evaluate. 
// It must have a closing tag at the end such as <h1> title </h1>; 
function Header() {
  return <h1>Hello world </h1>; 
}

// this is a react functional component, or an App component
function App() {
 
  /*
    Note 1: We use the jsx syntax to render compoenents.
  Inorder for a compoennt to render something on the page, it needs 
  to return one or more JSX elements. 
    * React understands jsx 
    * This return statment is calling the "react component" named "Header"
      we created above.  
  */
  return <Header/>;
}

export default App
