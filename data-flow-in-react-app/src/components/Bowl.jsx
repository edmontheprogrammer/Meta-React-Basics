// Grandchild component


/*
    "Bowl" is a grandchild compoenent because it has two parent components: "Puppy()" and "Dog()"

    * React allows you to nest compoenents which is like creating multiple inheritance in OOP. 
    Therefore, "Bowl" compoennt can gain access to items created in both "Dog()" compoenent and "Puppy" 
    compoenent such as "props.bowlShape" and "props.bowlStatus".
*/
function Bowl(props) {
    return (
        <span>
            {props.bowlShape} - shaped bowl, and it's currently {props.bowlStatus}
        </span>
    )
}

export default Bowl; 