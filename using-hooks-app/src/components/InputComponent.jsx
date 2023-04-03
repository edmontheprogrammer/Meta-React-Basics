
import { useState } from "react";

// Creating a component named "InputComponent"
export default function InputComponent() {
    /*
        The state variable "inputText" and the "setText" method are used to set the current text that is 
        typed. The "useState" hook is initialized at the beginning of the component. 

        By default the "inputText" will be set to "hello"
    */
    const [inputText, setText] = useState('hello'); 

    /*
        As the user types, the "handleChange" function, reads the latest input value from the broweser's 
        input DOM element, and calls the "setText" function, to update the local state of inputText. 
    */
    function handleChange(e) {
        setText(e.target.value); 
    }

    /*
        Finally, clicking the reset button will update the "inputText" back to "hello". 

        isn't this neat?

        Keep in mind that the "inputText" here is local state and is local to the "InputComponent". 
This means that outside of this component, "inputText" is unavailable and unknown. 
In React, state is always referred to the local state of a component. 
    */

    return (
        <>
            <input value={inputText} onChange={handleChange} />
            <p>You typed: {inputText}</p>
            <button onClick={() => setText('hello')}>
                Rest
            </button>
        </>
    );
}