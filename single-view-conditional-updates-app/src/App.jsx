import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // creating an instance of the Date() class using the "new" keyword constructor 
  const time = new Date(); 
  // 
  const day = time.toLocaleDateString('en-us', {weekday: "long"}); 
  const morning = time.getHours() >= 6 && time.getHours() <= 12; 
  let dayMessage; 

  if (day.toLocaleLowerCase()  === "monday" ) {
    dayMessage = `Happy $(day)`; 
  } else if (day.toLocaleLowerCase()  === "tuesday" ) {
    dayMessage = `${day}, four days to go`;  
  } else if (day.toLocaleLowerCase() === "wednesday") {
    dayMessage = `${day}, half way there`; 
  } else if (day.toLocaleLowerCase() === "thursday") {
    dayMessage = `${day}, start planning the weekend`;
  } else if (day.toLocaleLowerCase() === "friday") {
    dayMessage = `Woo, hoo, the weekend is coming!`; 
  } else {
    dayMessage = "Stay calm and keep having fun";
  }
  return (
    <div className="App">

      <h1>
        {dayMessage}
      </h1>
      {morning ? <h2>have you had breakfast yet?</h2>: ''}

    </div>
  )
}

export default App
