import { GifBoxOutlined } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { deleteCartItem } from '../../store/cartReducer';
import styles from './CartItem.module.scss';
const CartItem = (props: any) => {
    const dispatch = useDispatch();
    const {name, price, imageUrl, id, description} = props.product;
    const {currency, rate} = props;
    const priceRate =Math.ceil(price * rate);
    return(
        // <Box className={styles.item}>
        //     <Box className={styles.product}>
        //         <img className={styles.image} src={imageUrl} alt="" />
        //         <div className={styles.type}>
        //             <span className={styles.name}>{name}</span>
        //             <span className={styles.price}>Цена: {priceRate} {currency}</span>
        //         </div>
        //         <button className={styles.delete} onClick={() => dispatch(deleteCartItem(id))}>x</button>
        //     </Box>
        // </Box>
        <Card sx={{display: 'flex', bgcolor: 'white'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', height: '150px'}}>
                <CardMedia
                    component="img"
                    height="100"
                    image={imageUrl}
                    alt={name}/>
                <CardContent>
                    <Typography gutterBottom variant="subtitle1" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component='p'>
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"
                    onClick={() => dispatch(deleteCartItem(id))}>
                        x
                    </Button>
                </CardActions>
            </Box>
        </Card>
    )
}

export default CartItem