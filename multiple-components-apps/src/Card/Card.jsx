
/*

    Creating component named "Card" that acceps "props" as input parameter
    The Card compoenent returns a "div" element with two headings "h2" and "h3"
    The "props" are being pass-in from the App component. 

    * Note 1: "props.h2" calls the item you created inside the App compoenent with the "h2" value
    * Note 2: "props.h3" calls the item you created inside the App component with the "h3" value
    * Note 3: Each item is being displayed inside the HTML document in the order they are called. 
    * So we had the "<h1>" heading item first from within the App component, followed by the three "Card"
    items you added in the App compoenent. 
*/
function Card(props) {
    return (
        <div className="card">
            <h2>{props.h2}</h2>
            <h3>{props.h3}</h3>
        </div>
    );
};

export default Card; 
