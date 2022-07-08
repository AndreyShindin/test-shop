import { useDispatch } from 'react-redux';
import { deleteCartItem } from '../../store/cartReducer';
import styles from './CartItem.module.scss';
const CartItem = (props: any) => {
    const dispatch = useDispatch();
    const {name, price, imageUrl, id} = props.product;
    const {currency, rate} = props;
    const priceRate =Math.ceil(price * rate);
    return(
        <li className={styles.item}>
            <div className={styles.product}>
                <img className={styles.image} src={imageUrl} alt="" />
                <div className={styles.type}>
                    <span className={styles.name}>{name}</span>
                    <span className={styles.price}>Цена: {priceRate} {currency}</span>
                </div>
                <button className={styles.delete} onClick={() => dispatch(deleteCartItem(id))}>x</button>
            </div>
        </li>
    )
}

export default CartItem