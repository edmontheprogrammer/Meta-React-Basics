

/*
    Creating a component named "Fruit" that accepts "props" as input parameter. 
    the method returns "<div>" element with a call to the the props.fruits.map()
*/
function Fruits(props) {
    return (
        <div>
            {props.fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits; 