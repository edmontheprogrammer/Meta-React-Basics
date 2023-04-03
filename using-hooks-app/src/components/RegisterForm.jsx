import { useState } from "react";

export default function RegisterForm() {
    const [form, setForm] = useState ({
            firstName: 'Luke', 
            lastName: 'Jones', 
            email: 'lukeJones@sculpture.com',
    }); 

    return (
        <>
            <label>
                First name: 
                <input 
                    value={form.firstName}
                    onChange={ e => {
                        setForm({
                                ...form, 
                                firstName: e.target.value
                        });
                    }}     
                />
            </label>
            <label>
                Last name: 
                <input 
                    value={form.lastName}
                    onChange={ e => {
                        setForm({
                            ...form, 
                            lastName: e.target.value
                        }); 
                    }}
                />
            </label>
            <label>
                Email: 
                <input 
                    value={form.email}
                    onChange={ e => {
                        setForm({
                            ...form, 
                            email: e.target.value
                        });
                    }}
                />
            </label>
            <p>
                {form.firstName}{' '}
                {form.lastName}{' '}
                ({form.email})
            </p>
        </>
    );

    /*
     Notice that you are using a "form" object to store the state of all three text input field values: 
    
       const[form, setForm] = useState({
        firstName: 'Luke', 
        lastName: 'Jones', 
            email: 'lukeJones@sculpture.com', 
       });

You do not need to have three separate state variables in this case, and instead you can consildate them 
all together into one "form" object for better readability. 

In addition to the "useState" hook, there are other hooks that comes in handy such as "useContext", 
"useMemo", "useRef", etc. When you need to share logic and reuse the same logic across several components
you can extract the logic into a custom hook. Custom hooks offer flexibility and can be used for a wide range
of use-cases such  as form handling, animation timers and many more. 
     
    */
}