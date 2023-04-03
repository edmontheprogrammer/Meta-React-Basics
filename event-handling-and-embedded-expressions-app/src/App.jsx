import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  function thirdExample() {
    console.log('third example');
  };

  const fourthExample = () => console.log('fourth example'); 

  return (
    <div className="App">
      <div>
          <button onClick={
                function() {
                  console.log('first example')
            }}> 
                An inline anonymous ES5 function event handler 
            </button>
      </div>
       
       <div>
            <button onClick={() => console.log('second example')}>
                  An inline anonymous ES6 function event handler 
            </button>
       </div>
        
        <div>
            <div className='thirdExample'>
                <button onClick={thirdExample}>
                   using a separate function declaration
                </button>
            </div>
        </div>

        <div>
            <div className='fourthExample'>
              <button onClick={fourthExample}>
                  using a separate function expression
              </button>
            </div>
        </div>
    </div>
  );
};

export default App
