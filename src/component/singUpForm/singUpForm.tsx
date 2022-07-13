import { useState } from 'react';
import InputForm from '../inputForm/InputForm';
import styles from './singUpForm.module.scss';

const defaulState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SingUpForm = () => {
    const [stateFormUp, setStateFormUp] = useState(defaulState);
    const {name, email, password, confirmPassword} = defaulState;
    const handlerChange = (event: any) => {
        const {name, value} = event.target;
        setStateFormUp({...stateFormUp, [name]: value});
    }

    const handlerSubmit = (event: any) => {
        event.preventDefault();

        if(password != confirmPassword){
            alert('Не одинаковые пароли');
            return;
        }
    }
    return (
        <div className={styles.container}>
            <h2 className={styles.head}>
                Создать аккаунт
            </h2>
            <form className={styles.form} onSubmit={() => handlerSubmit}>
                <InputForm className={styles.input} type="text"  value={name} name='name' label='Логие' required onChange={handlerChange}/>
                <InputForm className={styles.input} type="email" value={email} name='email' label='Email' required onChange={handlerChange}/>
                <InputForm className={styles.input} type="password" value={password} name='password' label='Пароль' required onChange={handlerChange}/>
                <InputForm className={styles.input} type="password" value={confirmPassword} name='confirmPassword' label='Повторите пароль' required onChange={handlerChange}/>
                <button className={styles.button} type='submit'>Зарегестрироваться</button>
        </form>
        </div>
        
    )
}

export default SingUpForm