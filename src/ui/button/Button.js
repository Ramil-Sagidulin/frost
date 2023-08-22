import './Button.css'
export const buttonStyle = {
    normal: 'Button normal',
    primary: 'Button primary',
};

function Button(props) {
    return (
        <button style={props.style} className={props.buttonStyle} onClick={props.onClick}>{props.text}</button>
    )
}

export default Button;
