import { useSelector } from 'react-redux';
import MainComponent from '../../component/main-component/MainComponent';
import styles from './Garden.module.scss';

const Garden = () => {
    const { garder } = useSelector((state: any) => state.main);
    
    return (
        <MainComponent products={garder}/>
    )
}

export default Garden