import SingInForm from '../singInForm/singInForm';
import SingUpForm from '../singUpForm/singUpForm';
import styles from './Client.module.scss';

const Client = () => {
    return (
        <div className={styles.container}>
            <SingInForm />
            <SingUpForm />
        </div>
    )
}

export default Client