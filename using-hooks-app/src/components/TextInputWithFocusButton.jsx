import { useRef } from "react";

function TextInputWithFocusButton() {
    const inputEl = useRef(null); 
    const onButtonClick = () => {
        // `current` points to the monuted text input element. 
        inputEl.current.focus();  
    }; 

    return (
        <>
            <input />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}