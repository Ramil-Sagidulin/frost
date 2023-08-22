import Modal from "../Modal/Modal";
import Input from "../../ui/input/Input";
import Button, {buttonStyle} from "../../ui/button/Button";

function ModalAuthorization(props){
    return(
        <Modal visible={props.visible} close={props.close}>
            <div className='modal__title'>Вход в учётную запись</div>
            <Input placeholder={'Адрес электронной почты'}/>
            <Input placeholder={'Пароль'} style={{
                marginTop: '10px'
            }}/>
            <a href='!#' className='modal__link'>Забыли пароль?</a>
            <Button style={{marginTop: '140px', fontWeight: '400'}} buttonStyle={buttonStyle.primary}
                    text={'Войти'}/>
            <a href='!#' className='modal__link gray'>Создание новой учетной записи</a>
        </Modal>
    )
}
export default ModalAuthorization;
