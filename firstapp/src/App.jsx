import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header  from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import './App.css'



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
  return (
    <div>
        <Header name="Anna" color="purple"/>
        <Main greet="Howdy" /> 
        <Sidebar  greet="Hi" /> 
    </div>
  );
};

export default App;
