import {useEffect, useRef, useState} from 'react';
import './Dropdown.css'

function Dropdown(props) {



    const [CloseOpenItems, setCloseOpenItems] = useState(false);
    let blockCategory = 'blockCategory'
    if (CloseOpenItems === true) {
        blockCategory += ' dropdownWhite '
    }

    function Open() {
        if (listProd.length > 1) {
            setCloseOpenItems(function (prev) {
                let newState = (prev);
                newState = !newState
                return newState;
            })

        }
    }

    const [listProd, setListProd] = useState(props.items);

    let allItems = 'items';
    if (CloseOpenItems === true) {
        allItems += ' items-open';
    }

    useEffect(() => {
        setListProd(props.items)
    }, [props.items]);

    const [category, setCategory] = useState(listProd.length > 0 ? listProd[0].text : '');

    const dropdownRef = useRef();

    function Entry(index) {
        setCloseOpenItems(false);
        if (props.onChange !== undefined) {
            props.onChange(listProd[index].value);
        }
        setCategory((listProd[index].text));
    }

    useEffect(function () {
        document.addEventListener('click', function (event) {
            if (dropdownRef.current !== event.target) {
                setCloseOpenItems(false);
            }
        })
    }, []);

    useEffect(() => {
        setCategory(listProd[0].text)
    }, [props.items])

    return (
        <div className='dropdown'>
            <div className={blockCategory} onClick={Open} ref={dropdownRef}>{category}</div>
            <div className={allItems}>
                {listProd.map(function (prod, index) {
                    if (prod.text !== category) {
                        return (
                            <a href="" onClick={function (event) {
                                event.preventDefault();
                                Entry(index);
                            }} key={index}>{prod.text}</a>
                        )
                    }
                    return '';

                })}
            </div>
        </div>
    )
}

export default Dropdown;