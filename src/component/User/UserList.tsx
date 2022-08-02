import { Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { fetchProduct } from '../../store/now/productReducer';
import Product from '../product/Product';

export default function UserHistory(props: any) {
  const dispatch = useAppDispatch();
  let local = useLocation().pathname;
  
  if(local === '/user/historybye') {
    local = '/historybye';
  } else if (local === '/user/favorite'){
    local = '/favorite';
  } else if (local === '/user/cart'){
    local = '/cart';
  }
  let productList = local.slice(1);
  useEffect(() => {
    dispatch(fetchProduct(local))
  }, [])
  const products = useAppSelector(state => state.main[productList]);
  return (
    <Stack spacing={3} ml={4}>
      <Typography variant='h6'>
        {props.name}
      </Typography>
      <Paper>
        <Box minHeight={200}>
          <Stack direction='row' sx={{justifyContent: 'space-around'}}>
              <Typography variant='h6'>Имя продукта</Typography>
              <Typography variant='h6'>Описание</Typography>
              <Typography variant='h6'>Цена</Typography>
              <Typography variant='h6'>Дата</Typography>
          </Stack>
          <Stack spacing={3}>
            {products.length> 0 ? 
              products.map((product: any) => {
                return (
                    <Product key={product.id} product={product}/>
                )
              }) 
              : <Typography variant='h6' align='center' mt={8}>{props.name} отсутствует</Typography>
            }
          </Stack>
        </Box>
      </Paper>
    </Stack>
  )
}
