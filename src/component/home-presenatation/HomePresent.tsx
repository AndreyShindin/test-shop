import { useSelector } from 'react-redux';
import HomeCategory from '../home-category/HomeCategory';
import Slide from '../slider/Slide';
import styles from './HomePresent.module.scss';

const HomePresent = () => {
    const categoies = [
        {id: 1, name: 'Товар', imageUrl: '', link: '#'},
        {id: 2, name: 'Товар', imageUrl: '', link: '#'},
        {id: 3, name: 'Товар', imageUrl: '', link: '#'},
        {id: 4, name: 'Товар', imageUrl: '', link: '#'},
        {id: 5, name: 'Товар', imageUrl: '', link: '#'},
        {id: 6, name: 'Товар', imageUrl: '', link: '#'},
        {id: 7, name: 'Товар', imageUrl: '', link: '#'},
        {id: 8, name: 'Товар', imageUrl: '', link: '#'},
        {id: 9, name: 'Товар', imageUrl: '', link: '#'},
        {id: 10, name: 'Товар', imageUrl: '', link: '#'},
    ]
    return(
        <div className={styles.present}>
            <Slide />
            <div className={styles.products}>
                <ul className={styles.list}>
                    {categoies.map((category) => {
                        return <HomeCategory key={category.id} category={category}/>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default HomePresent