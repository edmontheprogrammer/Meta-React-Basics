
import Puppy from "./Puppy";

// Parent component
// Note 1: Dog or the parent component is importing "Puppy" compoenent and returning the "Puppy"
// compoenent using the return statment. 
// Note 2: Puppy compoenent has three attributes: "name", "bowlShape" and "bowlStatus" 
// all of them are initialized to string values
function Dog() {
    return (
        <Puppy name="Max" blowShape="square" bowlStatus="full"/>
    );
};

export default Dog; 