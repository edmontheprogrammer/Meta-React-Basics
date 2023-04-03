import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Header  from './components/Header'
import Main from './components/Main'
import Sidebar from './components/Sidebar'

import avator from './images/avator.jpg'

import Btn from './components/Btn';

import './App.css'


/*
  Note 1: The "Logo" is usually a separate component in a separate folder and
      file when following best practices. But to Keep things simple, 
      we'll add the logo to the same files as the "App" component. 

  Note 2: Command for creating new React app: 

    "  npm create vite@latest "

*/
function Logo(props) {
  const userPic = <img src={avator} width={"150px"} height={"150px"}/>;
  return userPic; 
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
  return (
    <div>
    <div>
      <h1>Hello World</h1>
      <Logo />
    </div>
        <Header name="Anna" color="purple"/>
        <Main greet="Howdy" /> 
        <Sidebar  greet="Hi" /> 
        <Btn />
    </div>
  );
};

export default App;
