import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from "./Card/Card.jsx"; 

function App() {

  return (
    <div className='App'>
        <h1> Task: Add three Card elements</h1>

        <Card h2="First card's h2" h3="First card's h3" />

        <Card h2="Second card's h2" h3="Second card's h3" />

        <Card h2="Third card's h2" h3="Third card's h3" />
    </div>    
  );
};

export default App

/*

  * Step 1: Your first task was to add a Card.js file, and insid of that file, declare a "Card" function 

  function Card(props) {

  };

  * Step 2: Inside the Card.js file's "Card", you added a return statment with two parentheses after it, to allow
  the return statment to spread onto several lines. 

  function Card(props) {
    return (

    );
  };

  * Step 3: Inside the "return" statment, you needed to add a wrapping "div" element. 

  function Card(props) {
    return (
      <div>
      </div>
    );
  };

  Step 4: Inside the wrapping "div" element, you needed to add an "h2" element, and under it, an "h3" element

  function Card(props) {
    return (
      <div>
          <h2> </h2>
          <h3> </h3>
      </div>
    );
  };

  Step 5: Inside the "h2" element you've already added, you needed to add the JSX expression of: {props.h2}

  function Card(props) {
    return (
      <div className="card">
          <h2> {props.h2}</h2>
          <h3>{props.h3} </h3>
      </div>
    );
  };

  Step 6: Inside the "h3" element you've already added, you needed to add the JSX expression of: {props.h3}

  function Card(props) {
    return (
      <div className="card">
        <h2> {props.h2}</h2>
        <h3> {props.h3} </h3> 

      </div>
    );
  };

  Step 7: You also had to make sure to not to forget the "export default Card;" line of code at the bottom of the 
        Card component. 

  function Card(props) {
    return (
      <div className="card"> 
          <h2> {props.h2}</h2>
          <h3> {props.h3}</h3>
      </div>
    );
  };
  export default Card; 


  Step 8: Back inside the App component, you needed to import the "Card" component


  import "./App.css"; 
  import Card from "./Card"; 

  function App () {
    return (
      <div>
        <h1> Task: Add three Card elements</h1>
      </div>
    );
  }; 
  export default App; 


Step 9: Inside the App component's "return" statment. under the "h1" element, you should have added three 
"<Card />" JSX elements. 

import "./App.css"; 
import Card from "./Card"; 

function App() {
  return (
    <div>
      <h1> Task: Add three Card elements </h1>
      <Card />
      <Card />
      <Card />

    </div>
  );
};

export default App; 

Step 10: You needed to add the "h2" prop to the first "<Card />" element, like this: 
' h2="First card's h2" '

 import "./App.css"; 
import Card from "./Card"; 

function App() {
  return (
    <div>
      <h1> Task: Add three Card elements </h1>
      <Card h2="First card's h2" />
      <Card />
      <Card />

    </div>
  );
};
export default App; 

Step 11: You needed to add the "h3" prop to the first "<Card />" element, like this: "h3="First card's h3"

 import "./App.css"; 
import Card from "./Card"; 

function App() {
  return (
    <div>
      <h1> Task: Add three Card elements </h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card />
      <Card />

    </div>
  );
};
export default App;

Step 12; You should have added the "h2" and "h3" props to the second "<Card />" element, with the "h2" reading: 
"Second card's h2" and the "h3" reading "Second card's h3"



 import "./App.css"; 
import Card from "./Card"; 

function App() {
  return (
    <div>
      <h1> Task: Add three Card elements </h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3"/>
      <Card />

    </div>
  );
};
export default App;

Step 13: You should have added the "h2" and "h3" props to the third "<Card />" element, with the h2 reading: 
"Third card's h2" , and the "h3" reading "Third card's h3". 

 import "./App.css"; 
import Card from "./Card"; 

function App() {
  return (
    <div>
      <h1> Task: Add three Card elements </h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3"/>
      <Card h2="Third card's h2" h3="Third card's h3"/>

    </div>
  );
};
export default App;

Step 14: You needed the "className" attribute to the Card.js file's "Card" function's return statment's wrapping
"div" element. 


 import "./App.css"; 
import Card from "./Card"; 

function App() {
  return (
    <div className="App">
      <h1> Task: Add three Card elements </h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3"/>
      <Card h2="Third card's h2" h3="Third card's h3"/>

    </div>
  );
};
export default App;

*/

