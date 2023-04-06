import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import rooftops from "./assets/images/central-park.jpg"

function App() {
  const randomImageUrl = "https://unsplash.com/photos/AUmq5VsgL3g"; 

  return (
    <div className="App">
      <h1>
        Task: add three images with some styling
      </h1>
      <img
          height={200}
          src={'rooftops'}
          alt='An image of a park in New York'
    />
    <img 
      height={200}
      src={'require("using-embedded-assets/src/assets/images/central-park.jpg")'}
      alt='An image of central park'
    />
      
      <img height={200} 

        src={randomImageUrl}
      />
    </div>
  )
}

export default App
