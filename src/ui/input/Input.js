import './Input.css'

function Input(props) {
    return (
        <div>
            <div className='input__title'>{props.title}</div>
            <input style={props.style} className='input' placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
        </div>
    )
}

export default Input;
