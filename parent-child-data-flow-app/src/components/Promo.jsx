
import PromoHeading from "./PromoHeading";

/*
    This is the parent component because it renders the child component
    "PromoHeading"
*/
function Promo() {

    // Creating data inside the Parent component
    // the data is just a Javascript object
    const data = {
        heading: "99% off all items!",
        callToAction: "Everyting must go!"
    }

    return (
        <div>
            <PromoHeading
                heading={data.heading}
                callToAction={data.callToAction}
            />
        </div>
    )
}

export default Promo; 


