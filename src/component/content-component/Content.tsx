import { FormControl, Grid, MenuItem, Paper, Select, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { useLocation } from 'react-router-dom';
import { fetchProduct } from '../../store/mainReducer';
import Product from '../product/Product';

const Content = () => {
    const [stateSelect, changeSelect] = useState('default');
    const local = useLocation().pathname;
    const dispatch = useAppDispatch();
    let productList = local.slice(1);
    
    useEffect(() => {
        dispatch(fetchProduct(local))
    }, [])
    // const { products } = useAppSelector((state) => state.main)
    const products = useAppSelector(state => state.main[productList]);
    
    let sortProdocts = products;
    if(stateSelect === "ascending"){
        sortProdocts.sort(function (a: any, b: any) {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            
            return 0;
          });
    } else if (stateSelect === "descending"){
        sortProdocts.sort(function (a: any, b: any) {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            
            return 0;
          });
        sortProdocts.reverse();
    }

    

    return (
        <Paper sx={{p: '10px'}}>
            <Typography variant='h3' fontSize={30} align='center'>
                {sortProdocts.name}
            </Typography>
            <Stack direction='row' sx={{justifyContent: 'space-between'}} mb={3}>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <Select
                    defaultValue={stateSelect}
                    value={stateSelect}
                    onChange={(e) => changeSelect(e.target.value)}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    size='small'>
                        <MenuItem value="default">???? ??????????????????</MenuItem>
                        <MenuItem value="ascending">???? ????????, ???? ??????????????????????</MenuItem>
                        <MenuItem value="descending">???? ????????, ???? ????????????????</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
            <Grid container spacing={3}>
                {sortProdocts.map((product: any) => {
                    return (
                        <Product key={product.id} product={product}/>
                    )
                })}
            </Grid>
        </Paper>
    )
}

export default Content
