import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // creating an instnace of the Audio class using the new constructor and adding URL that provides 
  // unique sound 
  const bird1 = new Audio (
      "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  ); 

  // Creating another instance of the Audio class using the new constructor and adding URL that provides 
  // a unique sound
  const bird2 = new Audio (
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3" 
  )

    /*
      Creating a function named toggle that

    */
    function toggle1() {
      if (bird2.paused) {
        bird2.play();
      } else {
        bird1.pause(); 
      }
    }; 

    function toggle2() {
      if (bird2.paused) {
        bird2.play();
      } else {
        bird2.pause(); 
      }
    }

  return (
    <div className="App">

      {/* // Creating buttons with "onClick" that is being assigned to toggle1 and toggle 2 */}
      <button onClick={toggle1}> Caspian Tern 1</button>
      <button onClick={toggle2}>Caspian Tern 2</button>
    </div>
  )
}

export default App
