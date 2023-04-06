import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ReactPlayer from "react-player"; 

function App() {
  const vidUrl = "https://www.youtube.com/watch?v=1AyiUpP3SK0";

  return (
    <div className="App">
      <h1>React Player example</h1>
      <ReactPlayer 
        url={vidUrl}
        playing={false}
        volume={0.5}
      />
    </div>
  )
}

export default App
