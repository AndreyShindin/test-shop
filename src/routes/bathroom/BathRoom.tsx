import { useSelector } from 'react-redux';
import MainComponent from '../../component/main-component/MainComponent';
import styles from './BathRoom.module.scss';

const BathRoom = () => {
    const { bathRoom } = useSelector((state: any) => state.main);
    
    return (
        <MainComponent products={bathRoom}/>
    )
}

export default BathRoom