import { useDispatch } from 'react-redux';
import { addCartItem } from '../../store/cartReducer';
import styles from './Product.module.scss';

const Product = (props: any) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl, description } = props.product;
    const {currency, rate} = props;
    const priceRate =Math.ceil(price * rate);
    return (
        <li className={styles.item}>
            <div className={styles.product}>
                <div className={styles['container-image']}>
                    <a href="#">
                        <img className={styles.image} src={imageUrl} alt="" />
                    </a>
                </div>
                
                <div className={styles.type}>
                    <div>
                        <a href="#">
                            <span className={styles.name}>{name}</span>
                        </a>
                    </div>         
                    <p className={styles.description}>{description}</p>
                    <span className={styles.price}>Цена: {priceRate} {currency}</span>
                </div>
                <button className={styles.delete} onClick={() => dispatch(addCartItem(props))}>Добавить в корзину</button>
            </div>
        </li>
    )
}

export default Product