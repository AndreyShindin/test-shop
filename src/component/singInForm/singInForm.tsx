import { useState } from 'react';
import InputForm from '../inputForm/InputForm';
import styles from './singInForm.module.scss';

const defaultIn = {
    email: '',
    password: '',
}
const SingInForm = () => {
    const [formIn, setFormIn] = useState(defaultIn);
    const { email, password, } = formIn;


    const handleChange = (event: any) => {
        const {name, value} = event.target;

        setFormIn({...formIn, [name]: value})
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();

    }

    const handleClick = (event: any) => {
        const {name, value} = event.target;

        console.log(`${name}:${value}`)
    }
    return (
        <div className={styles.container} >
            <h2 className={styles.head} >
                Войти в аккаунт
            </h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <InputForm className={styles.input} type="email"  value={email} name='email' label='Email' required onChange={handleChange}/>
                    <InputForm className={styles.input} type="password" value={password} name='password' label='Пароль' required onChange={handleChange}/>
                    <button className={styles.button} type='submit' onClick={handleClick}>Войти</button>
                </form>
        </div>
        
    )
}

export default SingInForm