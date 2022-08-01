import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addProductBasket, addProductFavorite } from '../../store/now/productReducer';

const Product = (props: any) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl, description, id } = props.product;

    const shortDesc = (str: string) => {
        return (str.length > 40) ?
        str.slice(0, 115 - 1) + '…' : str;
    }
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
                        <Typography variant='h6' mb={2}>
                            {name}
                        </Typography>
                    </NavLink>
                    <Typography variant='body2' sx={{maxHeight: '100px'}} mb={2}>
                        {shortDesc(description)}
                    </Typography>
                    <Typography component='span'>
                        Цена: {price} руб
                    </Typography>
                </CardContent>
                <CardActions sx={{justifyContent: 'space-around'}}>
                    <Button size='small' onClick={() => dispatch(addProductFavorite(props))}>В избранное</Button>
                    <Button 
                        size='small'
                        variant='contained'
                        onClick={() => dispatch(addProductBasket(props))}>
                        Купить
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Product