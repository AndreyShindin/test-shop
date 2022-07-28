import { useSelector } from 'react-redux';
import MainComponent from '../../component/main-component/MainComponent';
import styles from './LivingRoom.module.scss';

const LivingRoom = () => {
    const { livingRoom } = useSelector((state: any) => state.main);
    
    return (
        <MainComponent products={livingRoom}/>
    )
}

export default LivingRoom