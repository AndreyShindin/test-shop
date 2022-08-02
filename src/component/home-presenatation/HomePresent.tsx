import { Box, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { fetchProduct } from '../../store/mainReducer';
import Product from '../product/Product';
import Slide from '../slider/Slide';

const HomePresent = () => {
    const dispatch = useAppDispatch();
    let local = '/offers';
    useEffect(() => {
        dispatch(fetchProduct(local))
    }, []);
    const productList = local.slice(1);
    const products = useAppSelector(state => state.main[productList]);
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
                    {products.map((item: any) => {
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