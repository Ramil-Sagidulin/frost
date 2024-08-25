import Modal from "../Modal/Modal";
import Input from "../../ui/input/Input";
import Button, { buttonStyle } from "../../ui/button/Button";
import { useEffect, useState } from "react";
import './ModalAuthorization.css'
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../features/auth/authSlice";
import useModal from "../../hooks/useModal";
import ModalRegistration from "../modal_registration/ModalRegistration";


function ModalAuthorization(props) {
    const authState = useSelector(state => state.auth);
    const [visibleRegistration, openRegistration, closeRegistration] = useModal();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState();

    const dispatch = useDispatch();

    function Enter() {
        dispatch(signIn(username, password));
        setUsername('');
        setPassword('');
    }
    useEffect(() => {
        if (authState.user) {
            props.close()
        }
    }, [authState.user])
    return (
        <div>
            {/*<ModalRegistration visible={visibleRegistration} close={closeRegistration} />*/}
            <Modal visible={props.visible} close={() => {
                setUsername('');
                setPassword('');
                props.close();
            }}>
                {!authState.loading ? <div>
                    <div className='modal__title'>Вход в учётную запись</div>
                    <div className='block-errorsAuth'>{errors}</div>
                    <Input placeholder={'Адрес электронной почты'} value={username}
                        onChange={(event) => setUsername(event.target.value)} />
                    <Input placeholder={'Пароль'} style={{
                        marginTop: '10px'
                    }} value={password} onChange={(event) => setPassword(event.target.value)} />
                    <a href='!#' className='modal__link'>Забыли пароль?</a>
                    {username && password ? <Button style={{ width: '100%', marginTop: '140px', fontWeight: '400' }} buttonStyle={buttonStyle.primary}
                        text={'Войти'} onClick={Enter} /> : <Button style={{ width: '100%', marginTop: '140px', fontWeight: '400' }} buttonStyle={buttonStyle.primary}
                            text={'Введите логин и пароль'} />}
                    <a className='modal__link gray' onClick={() => {
                        props.close();
                        document.getElementById('registration-button').click();
                    }}>Создание новой учетной записи</a>
                </div> : <div>
                    <div className='loader_title'>Идет загрузка</div>
                    <div className='loader'></div>

                </div>}
            </Modal>
        </div>
    )
}

export default ModalAuthorization;
