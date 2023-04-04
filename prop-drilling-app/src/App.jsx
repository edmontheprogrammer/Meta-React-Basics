import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// Creating a component named "Main"
function Main(props) {
  return <Header msg={props.msg} />;
}

// Creating a component named "Header"
function Header(props) {
  return (
    <div style={{ border: "10px solid whitesmoke" }}>
        <h1>Header here</h1>
        <Wrapper msg={props.msg} />
    </div>

  );
};

function Wrapper(props) {
  return (
    <div style={{ border: "10px solid lightgray"}}>
        <h2>Wrapper here</h2>
        <Button msg={props.msg} />
    </div>
  );
};


function Button(props) {
  return (
    <div style={{ border: "20px solid orange" }}>
      <h3> This is the Button component</h3>
      <button onClick={ () => alert(props.msg)}>Click me!</button>

    </div>
  ); 
};


function App() {

  return (
    <Main 
        msg="I passed through the Header and the Wrapper and I reached the Button component"
      />
  );
};

export default App; 

/*
  This app is simple enough that you should be able to understand it on your own. let's address the main
  points to highlight what is happening in the code above. 

  The top-most component of this app is the "App" component. The "App" component returns the "Main" component. 

 The "Main" component accepts a single attribute, named "msg", as in "message". 
 
 At the very top of the app, the "Main" function declares how the "Main" component should behave. The 
 "Main" component is responsible for rendering the "Header" component. 
 "Note that when the 'Header' component is rendered from inside 'Main', it also recieves the 'msg' prop " 
 
 The "Header" component's function declartion renders an "h1" that reads "Header here", then another 
 component named "Wrapper". Note that the naming here is irrelevant - the components "Header" and "Wrapper"
 are named to make it a bit more like it might appear in a real app, but ultimately, the focus is on having multiple 
 components, rather tahn describing specific component names properly. 

 So, the "Header" component's function declaration has a return statment, which "renders the 'Wrapper'
 component with the 'msg' prop passed to it. 
 "

 In the 'Wrapper' component's function declaration, there's an "h2" that reads "Wrapper here", in addition
 "rendering of the 'Button' component, which also receives the 'msg' attribute "

 Finally, the 'Button' component's function declaration is coded to recieve the props object, then 
 inside of the wrapping 'div', show an 'h3'. The 'h3' reads "This is the Button component", and then 
 under that, there's a button element with an 'onClick' event-handling attribute. This is passed to an 
 arrow function which should alert the string that comes from the 'props.msg' prop. 
  
  
  
  
  */