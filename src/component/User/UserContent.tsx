import { Grid, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useLocation, useMatch, useParams } from 'react-router-dom';
import UserClient from './UserClient';
import UserList from './UserList';

export default function UserContent() {
  const page = useParams().id;
  return (
    <Grid item xs={10}>
      { page == 'client' ? <UserClient/>: 
        page == 'favorite' ? <UserList name={'Избарнное'}/> :   
        page == 'historybye' ? <UserList name={'История покупок'}/> :
        page == 'cart' ? <UserList name={'Корзина'}/>: <UserClient/>}
    </Grid>
  )
}
