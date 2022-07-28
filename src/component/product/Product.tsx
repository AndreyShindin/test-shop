import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addCartItem } from '../../store/cartReducer';
import styles from './Product.module.scss';

const Product = (props: any) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl, description, id } = props.product;
    return (
        <Grid xs={8} item md={3} sm={6}>
            <Card sx={{ minxWidth: 345 }}>
                <CardMedia
                    component='img'
                    height='140'
                    image={imageUrl} 
                    alt={name}
                />
                <CardContent sx={{p: '30px'}}>
                    <NavLink to={`/product/${id}`}>
                        <Typography variant='h6'>
                            {name}
                        </Typography>
                    </NavLink>
                    <Typography variant='body2' sx={{maxHeight: '100px'}}>
                        {description}
                    </Typography>
                    <Typography component='span'>
                        Цена: {price} руб
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'space-around'}}>
                    <Button size='small'>В избранное</Button>
                    <Button 
                        size='small'
                        variant='contained'
                        onClick={() => dispatch(addCartItem(props))}>
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Product