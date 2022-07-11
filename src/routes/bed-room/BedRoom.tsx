import { useSelector } from 'react-redux';
import MainComponent from '../../component/main-component/MainComponent';
import styles from './BedRoom.module.scss';

const BedRoom = () => {
    const { bedRoom } = useSelector((state: any) => state.main);
    
    return (
        <div>
            <MainComponent products={bedRoom}/>
        </div>
    )
}

export default BedRoom