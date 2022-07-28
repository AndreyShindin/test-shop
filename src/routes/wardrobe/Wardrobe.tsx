import { useSelector } from 'react-redux';
import MainComponent from '../../component/main-component/MainComponent';
import styles from './Wardrobe.module.scss';

const Wardrobe = () => {
    const { wardrobe } = useSelector((state: any) => state.main);
    
    return (
        <MainComponent products={wardrobe}/>
    )
}

export default Wardrobe