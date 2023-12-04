import Modal from "../Modal/Modal";
import Input from "../../ui/input/Input";
import Button, {buttonStyle} from "../../ui/button/Button";
import axios from "axios";
import './ModalRegistration.css'
import {useState, useEffect} from "react";

function ModalRegistration(props) {
    let [firstName, setFirstName] = useState('');
    let [lastName, setLastName] = useState('');
    let [email, setEmail] = useState('');
    let [passwordState, setPasswordState] = useState('');
    let [repeatPassword, SetRepeatPassword] = useState('');
    let [errors,setErrors]=useState([]);
    function Registration() {
        if (passwordState === repeatPassword) {
            axios.post('https://frost.runtime.kz/api/registration', {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: passwordState,
            }).then((res) => {
                props.close()
                    setFirstName('');
                    setLastName('');
                    setEmail('');
                    setPasswordState('');
                    SetRepeatPassword('');
            }).catch(error => {
                let response = error.response;
                if (response.status === 400) {
                    setErrors(response.data.errors)
                }
            });
        } else {
            alert('Пароли не совподают');
        }
    } 
    useEffect(()=>{
        if(props.visible===false){
            setFirstName('');
            setLastName('');
            setEmail('');
            setPasswordState('');
            SetRepeatPassword('');
            setErrors('');
        }
    },[props.visible])

    return (
        <Modal visible={props.visible} close={props.close}>
            <div className='modal__title'>Создание учётной записи</div>
            <div className='block-errors' >{errors.first_name} {errors.last_name}  </div>
            <div className='modal__name'>
                <Input placeholder={'Имя'} value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                <Input placeholder={'Фамилия'} value={lastName} onChange={(event) => setLastName(event.target.value)}/>
            </div>
            <div className='block-errors' >{errors.email}</div>
            <Input placeholder={'Адрес электронной почты'} value={email}
                   onChange={(event) => setEmail(event.target.value)}/>
                   <div className='block-errors' >{errors.password}</div>
            <Input placeholder={'Пароль'} value={passwordState} onChange={(event) => setPasswordState(event.target.value)}/>
            <Input placeholder={'Повторите пароль'} value={repeatPassword}
                   onChange={(event) => SetRepeatPassword(event.target.value)}/>
            <Button style={{marginTop: '50px', fontWeight: '400'}} buttonStyle={buttonStyle.primary}
                    text={'Зарегистрироваться'} onClick={Registration}/>
            <div className='modal__link gray'>Войти в существующую учётную запись</div>
        </Modal>
    )
}

export default ModalRegistration;
