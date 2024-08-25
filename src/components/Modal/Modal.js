import './Modal.css'

function Modal(props) {

    if (props.visible) {
        return (
            <div className={'modal visible'}>
                <div className='modal__background' onClick={props.close}/>
                <div className='modal__block'>
                    {props.children}
                </div>
            </div>

        )
    } else {
        return null;
    }
}

export default Modal;
