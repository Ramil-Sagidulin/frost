import './Modal.css'
import {useEffect, useState} from "react";

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
// const [openModal, setOpenModal] = useState(props.visible);
// const modalClass = 'modal'
// useEffect(() => {
//     setOpenModal(props.visible)
// }, [props.visible]);
// return (
//     <div className={openModal !== true ? modalClass : modalClass + ' visible'}>
//         <div className='modal__background' onClick={() => {
//             setOpenModal(false);
//             props.onClose();
//
//         }}></div>
//         <div className='modal__block'>
//             {props.children}
//         </div>
//     </div>
//
// )
}

export default Modal;
