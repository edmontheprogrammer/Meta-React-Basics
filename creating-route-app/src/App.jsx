import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Homepage from './components/Homepage'
import AboutLittleLemon from './components/AboutLittleLemon'
import Contact from './components/Contact'

import {Routes, Route, Link} from 'react-router-dom'; 

function App() {

  return (
    <div className="App">
        <nav>
          <Link to='/' className='nav-item'>Homepage</Link>
          <Link to='/about' className='nav-item'>About Little Lemon</Link>
          <Link to='/contact' className='nav-item'>Contact</Link>
        </nav>

        <Routes>
              <Route path='/' element={<Homepage />}></Route>
              <Route path='/about' element={<AboutLittleLemon/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
    </div>
  );
}; 

export default App

/*
  Step 1: first you added a new file, Contact.jsx inside the compoenents folder. 

  Step 2: Inside the Contact.js file, you added an ES5 function named "Contact" and then added the export
  default "Contact" after the Contact function's closing curly brace. Then you repeated the same for 
  "AboutLittleLemon" and "HomePage"

  Step 3: Next, inside the body of the Contact function, you added a "return" statment with the following 
  code <h1> Contact Lemon on this page. </h1>

  Step 4: Inside the App.js file, you imported the newly-built Contact, Homepage and AboutLittleLemon 
  components. 

  Step 5: 
  Inside the App.js file's App function's return statment, locate the "nav" element and inside of it, 
  another <Link> element with the "to" attribute pointing to the contact, the "className" set to 
  "nav-item" and the text inside the "Link" element's opening and closing tags set to "Contact
  
  "

  Step 6: Inside the "Routes" element, add a third route, with the path attribute pointing to the "/contact"
  and the element attribute set to {<Contact />} Repeat the same for Homepage and AboutLittleLemon page or 
  components 
*/