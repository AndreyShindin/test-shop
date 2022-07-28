import { useSelector } from 'react-redux';
import MainComponent from '../../component/main-component/MainComponent';
import styles from './Kitchen.module.scss';

const Kitchen = () => {
    const { kitchen } = useSelector((state: any) => state.main);
    
    return (
        <MainComponent products={kitchen}/>
    )
}

export default Kitchen