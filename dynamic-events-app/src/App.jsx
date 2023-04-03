import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  /*
    Creating a function named "handleClick()"  
  */
  function handleClick() {
    // Creating a variable named randomNum and assigning it to the Math.random that can generate random 
    // numbe between 1 and 3. 
    let randomNum = Math.floor(Math.random() * 3 ) + 1; 
    // outputting the randomNum value to the console
    console.log(randomNum); 
    /*
      Creating a variable named "userInput" that is being assigning to the prompt() method that 
      will be asking the user to type a number
    */
    let userInput = prompt('type a number'); 
    // Creating an alert() method that will output an alert box with the "randomNum" number that got 
    // generated and the input user types in
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`); 
  }

  return (

    // The return statment creates a div with "h1" and a button 
    // the button element has an "onClick" event that is referecing the "handleClick" which is like 
    // calling the "handleClick()" function from above. 
    <div>
        <h1>Task: Add a button and handle a click event</h1>
        <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </div>
  );
}

export default App;

/*

Step 1: First, you added a "button" element, with an opening and closing "button" tag, to the App compoent
"h1" element

function App() {

  return (
    <div>
        <h1> Task: Add a button and handle a click event </h1>
        <button> </button>
    </div>
  );
}
export default App; 

Step 2. In between the opening and closing "button" tag, you added the following text: Guess the number 
between 1 and 3. 

function App() {

  return (
    <div>
        <h1> Task: Add a button and handle a click event </h1>
        <button>Guess the number between 1 and 3 </button>
    </div>
  );
}
export default App; 

Step 3: Next, inside the opening "button" tag, you added the "onClick" event-handling attribute, and passed
it the following JSX expression: {handleClick}

function App() {

  return (
    <div>
        <h1> Task: Add a button and handle a click event </h1>
        <button onClick={handleClick}>Guess the number between 1 and 3 </button>
    </div>
  );
}
export default App; 

Step 4: Then, above the "return" statment of the App component - but still inside the App function - you added
the following ES5 function declaration: 

Note 1: You are adding a function inside another function which is allowed 

function App() {

  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3 + 1; 
    console.log(randomNum); 
    let userInput = prompt('type a number'); 
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`); 

  }

  return (
    <div>
        <h1> Task: Add a button and handle a click event </h1>
        <button>Guess the number between 1 and 3 </button>
    </div>
  );
}
export default App; 

Step 5: Finally, you saved your changes and ran the app to preview it in the browser. You should then be able
to click a button, which will show a prompt pop up which you can type into. After that, an alert pop up will 
show computer's "choice" and your guess. After you click "ok" to close the alert, you'll be able to click
the button again and try matching the number "chosen" by the computer one more time. 

*/

