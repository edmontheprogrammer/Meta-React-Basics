/*
  * This function is creating a "Heading()" compoenent that returns an "h1" element

 * Step 1: Step 1: In the starting code, you already had a JSX element  named <Heading /> , 
     being rendered from the App component, since it is a part of the App component's return statement.
  
   You added a new function to the App component, and named that function "Heading()". You placed it at the 
  very top of the "App.js" file.

  * Step 2: Next, in the body of the "Heading" compoenent, you added a return statment and spread it over several lines
  by following it up with an opening and a closing parenthsis. 

  * Step 3: Then, inside the parentheses, you added the following code: 
  <h1> This is an h1 heading </h1>

  * Step 4: Finally you saved your changes and viewed the app in the browser. 
*/
function Heading() {
    return (
      <h1>This is an h1 heading.</h1>
    );
  };

  export default Heading; 
