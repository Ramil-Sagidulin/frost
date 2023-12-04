import './Checkbox.css'
import {useEffect, useState} from "react";

function Checkbox(props) {
    const [checked, setChecked] = useState(0);


    let checkbox = 'checkbox';
    if (checked) {
        checkbox += ' checkbox__active';
    }

    function Check() {
        if (checked === 0) {
            setChecked(1);
        } else (
            setChecked(0)
        )

    }

    useEffect(() => {
        props.availableItems(checked)
    }, [checked]);

    return (
        <div onClick={Check} className={checkbox}></div>
    )
}

export default Checkbox;