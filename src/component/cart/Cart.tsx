import { useSelector } from 'react-redux';
import { NavLink, useMatch } from 'react-router-dom';
import { IProduct } from '../../store/cartReducer';
import CartItem from '../cartItem/CartItem';
import styles from './Cart.module.scss';

const Cart = () => {
    const products: Array<IProduct> = useSelector((state: any) => state.cart.previewProduct);
    const {currency, rate} = useSelector((state: any) => state.header)
    let forex = 'руб';
    if(currency == 'rub'){
        forex = 'руб'
    } else if (currency == 'usd') {
        forex = '$'
    } else {
        forex = 'e'
    }
    
    return (
        <div className={styles.cart}>
            <h3 className={styles.head}>Корзина покупок</h3>
            {products.length > 0 ? 
                <ul className={styles.list}>
                    {products.map((product) => {
                        return <CartItem 
                            key={product.id}
                            product={product}
                            currency={currency}
                            rate={rate}
                        />
                    })}
                </ul>
            : <h5 className={styles.non}>Корзина пуста</h5>}  
            <NavLink to='/cart' className={styles.button}>Посмотреть весь список покупок</NavLink>
        </div>
    )
}

export default Cart