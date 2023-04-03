
/*
    This is the child component. 
*/

// We updated the "child component" to accept data from the 
// "parent component" using "props" and then referencing the appropriate
// variable name that we created in the "parent component"
function PromoHeading(props) {
    return (
        <>
            {/* // <h1>80% off sale!</h1>

            /
                Here we are passing data from the parent component,
                "Promo" to the child component, "PromoHeading"
            / */}
            <h1>{props.heading}</h1>
            <h2>{props.callToAction}</h2>
      </>
    )
}

export default PromoHeading; 