
import Workdays from "./Workdays";
import Weekends from "./Weekends";

function CurrentMessage() {
    const day = new Date().getDay(); 

    if (day >= 1 && day <= 5) {
        return < Workdays />
    }

    return <Weekends />
}

export default CurrentMessage; 