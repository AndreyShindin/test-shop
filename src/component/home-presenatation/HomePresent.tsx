import { Box, Grid, Typography } from '@mui/material';
import Product from '../product/Product';
import Slide from '../slider/Slide';
import styles from './HomePresent.module.scss';

const HomePresent = () => {
    const previewProduct = [
        {id: 1, name: 'Товар', imageUrl: 'https://i.ytimg.com/vi/X6CKO9Hm5iU/maxresdefault.jpg', description: 'text', price: 356},
        {id: 2, name: 'Товар', imageUrl: 'https://i.ytimg.com/vi/X6CKO9Hm5iU/maxresdefault.jpg', description: 'text', price: 356},
        {id: 3, name: 'Товар', imageUrl: 'https://i.ytimg.com/vi/X6CKO9Hm5iU/maxresdefault.jpg', description: 'text', price: 356},
        {id: 4, name: 'Товар', imageUrl: 'https://i.ytimg.com/vi/X6CKO9Hm5iU/maxresdefault.jpg', description: 'text', price: 356},
        {id: 5, name: 'Товар', imageUrl: 'https://i.ytimg.com/vi/X6CKO9Hm5iU/maxresdefault.jpg', description: 'text', price: 356},
        {id: 6, name: 'Товар', imageUrl: 'https://i.ytimg.com/vi/X6CKO9Hm5iU/maxresdefault.jpg', description: 'text', price: 356},
        {id: 7, name: 'Товар', imageUrl: 'https://i.ytimg.com/vi/X6CKO9Hm5iU/maxresdefault.jpg', description: 'text', price: 356},
        {id: 8, name: 'Товар', imageUrl: 'https://i.ytimg.com/vi/X6CKO9Hm5iU/maxresdefault.jpg', description: 'text', price: 356},
    ]
    return(
        <Box>
            <Box mt={10}>
                <Slide />
            </Box>
            <Box mt={3}>
                <Typography variant='h3' align='center'>
                    Предложения
                </Typography>
                <Grid container spacing={2} mt={3}>
                    {previewProduct.map((item) => {
                        return (
                            <Product key={item.id} product={item}/>
                        )
                    })}
                </Grid>
            </Box> 
        </Box>
    )
}

export default HomePresent