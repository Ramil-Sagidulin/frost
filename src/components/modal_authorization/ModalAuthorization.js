import Modal from "../Modal/Modal";
import Input from "../../ui/input/Input";
import Button, { buttonStyle } from "../../ui/button/Button";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import './ModalAuthorization.css'
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../../features/auth/authSlice";

function ModalAuthorization(props) {
    const authState = useSelector(state => state.auth);
    console.log('--- auth state ---');
    console.log(authState);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState();

    const dispatch = useDispatch();

    function Enter() {
        dispatch(signIn(username, password));
        // axios.post(`https://frost.runtime.kz/api/auth/token`,{
        //     username:address,
        //     password:password,
        // })
        //     .catch(error=>{
        //     let response=error.response;
        //     if(response.status===400){
        //         setErrors('Данные не корректны');
        //     }
        //
        // })

    }
    useEffect(()=>{
        if(authState.user){props.close()}
    },[authState.user])
    return (
        <Modal visible={props.visible} close={props.close}>
            {!authState.loading ? <div>
                <div className='modal__title'>Вход в учётную запись</div>
                <div className='block-errorsAuth'>{errors}</div>
                <Input placeholder={'Адрес электронной почты'} value={username}
                    onChange={(event) => setUsername(event.target.value)} />
                <Input placeholder={'Пароль'} style={{
                    marginTop: '10px'
                }} value={password} onChange={(event) => setPassword(event.target.value)} />
                <a href='!#' className='modal__link'>Забыли пароль?</a>
                <Button style={{ marginTop: '140px', fontWeight: '400' }} buttonStyle={buttonStyle.primary}
                    text={'Войти'} onClick={Enter} />
                <a href='!#' className='modal__link gray'>Создание новой учетной записи</a>
            </div> : <div><div className='loader_title'>Идет загрузка</div><div className='loader'></div></div>}
        </Modal>
    )
}

export default ModalAuthorization;
