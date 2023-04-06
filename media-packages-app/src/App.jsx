import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//import ReactPlayer from "react-player"; 
import ReactPlayer from "react-player/youtube"; 


function App() {

  return (
    <div className="App">
      <MyVideo />
      
    </div>
  );
};

const MyVideo = () => {
  return (
    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'  />
  )
}

export default App
