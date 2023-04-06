import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Fruits from './components/Fruits'
import FruitsCounter from './components/FruitsCounter'
import React from "react"; 

function App() {
/*
  Note 1: The App component has the data named fruits
  fruits data gets send from the App component to the Fruits and FruitsCounter component using the props
  property. then the data gets send back to the App component and gets render in the return statment with 
  double () as   <Fruits fruits={fruits} /> and <FruitsCounter fruits={fruits} />. 
*/
  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1}, 
    {fruitName: 'apple', id: 2}, 
    {fruitName: 'plum', id:3}
  ]);


  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits} />
      <FruitsCounter fruits={fruits} />
      
    </div>
  )
}

export default App; 

/*
  Step 1: Move the state from the "Fruits" component to the "App" component

  To complete this step, you need to go to the "Fruits" component and cut the "useState" call, 
  namely this piece of code: 

  const [fruits] = React.useState([
    {fruitName: 'apple', id: 1}, 
    {fruitName: 'apple', id: 2}, 
    {fruitName: 'plum', id: 3},
  ]); 

  You also need to cut the "import React from  'React'; " at the very top of the "Fruits" componen, 
  since you no longer need to access the "useState" method on the React object from the Fruit file. 

  Additionally, you need to add the import statment to the "App" component, which means that you should inject
  a new import at teh very top of App.js: 

  Once you've done that, you need to update the "App" component's return statment so that it sends the 
  fruits data to the "Fruits" and "FruitsCounter" component - since both of these component need to get 
  this state's data via props. 

  Step 2: The "Fruits" component should be updated so that it acceptsstate from the "App" component. 

  Now all that you need to do is to update the code in the "Fruits" components to accept the props object 
  and render the fruits property where appropriate. 

  That means that the "Fruits" component will end up having the following code: 

  function Fruits(props) {
    return (
      <div>
          {props.fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
      </div>
    )
  }

  export default Fruits; 

  Step 3: 

  Once you've lifeted the state up from the "Fruits" component to the "App" component, you also need to update
  "FruitCounter" component

  Just like the "Fruits" component, the "FruitsCounter" component should also recieve state from the "App"
  component, so that it can display the number of the available fruits using the "length" property of 
  the arry of fruits from the "fruits" state variable. 

  The "FruitCounter" component will up having the follwing code

  function FruitCounter(props) {
    return (
      <h2> Total fruits: {props.fruits.length}  </h2>
    )
  }

  export default FruitCounter; 

*/
