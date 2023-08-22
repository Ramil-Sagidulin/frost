import './Checkbox.css'
import {useState} from "react";

function Checkbox(props) {
    const [checked, setChecked] = useState(false);


    let checkbox = 'checkbox';
    if (checked) {
        checkbox += ' checkbox__active';
    }

    function Check() {
        setChecked(!checked);
        props.availableItems(!checked);
    }

    return (
        <div onClick={Check} className={checkbox}></div>
    )
}

export default Checkbox;