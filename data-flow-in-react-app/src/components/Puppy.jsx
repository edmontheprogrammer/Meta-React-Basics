
import Bowl from "./Bowl";

// Child component 

/*
    Puppy component is inheriting or has access to the items we defined in the "Dog()" compoenent and 
    "props" is giving us access to them.
    "props.name" is giving us access to the item "name" defined in the Dog() component. 
*/
function Puppy(props) {
    return (
        <div>
            {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
        </div>
    )
}

export default Puppy; 