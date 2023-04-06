
/*
    Creating a component named "FruitCounter" that also accepts "props"
    The method returns an "h2" element
 */

function FruitsCounter(props) {
    return (
        <h2>Total fruits: {props.fruits.length}</h2>
    )
}

export default FruitsCounter; 