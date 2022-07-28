import { Box, Paper, Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { NavLink, useMatch } from 'react-router-dom';
import { IProduct } from '../../store/cartReducer';
import CartItem from '../cartItem/CartItem';
import styles from './Cart.module.scss';

const Cart = () => {
    const products: Array<IProduct> = useSelector((state: any) => state.cart.previewProduct);
    const {currency, rate} = useSelector((state: any) => state.header)
    
    return (
        // <div className={styles.cart}>
        //     <h3 className={styles.head}>Корзина покупок</h3>
        //     {products.length > 0 ? 
        //         <ul className={styles.list}>
        //             {products.map((product) => {
        //                 return <CartItem 
        //                     key={product.id}
        //                     product={product}
        //                     currency={currency}
        //                     rate={rate}
        //                 />
        //             })}
        //         </ul>
        //     : <h5 className={styles.non}>Корзина пуста</h5>}  
        //     <NavLink to='/cart' className={styles.button}>Посмотреть весь список покупок</NavLink>
        // </div>
        <Box sx={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'space-around',
            width: '400px', 
            height: '500px', 
            position: 'absolute', 
            top: '35px', 
            right: '10px', 
            bgcolor: 'white', 
            border: '1px solid black'}}>
                <Typography variant='h6'>
                    Корзина покупок
                </Typography>
                {products.length > 0 ? 
                <Stack>
                    {products.map((product) => {
                        return <CartItem 
                            key={product.id}
                            product={product}
                            currency={currency}
                            rate={rate}
                        />
                    })}
                </Stack>
            : <Typography variant='h6'>Корзина пуста</Typography>}
            <NavLink to='/cart' className={styles.button}>
                <Typography variant='subtitle1'>
                    Посмотреть весь список покупок
                </Typography>
            </NavLink>
        </Box>
    )
}

export default Cart