import { Box, Button, ButtonGroup, Grid, Paper, Stack, Typography } from '@mui/material';
import { NavLink, Outlet } from 'react-router-dom';

export default function User() {
  const userNav = [
    // /client
    {name: 'Пользователь', href: '/user/client'},
    {name: 'История покупок', href: '/user/historybye'},
    {name: 'Избранное', href: '/user/favorite'},
    {name: 'Корзина', href: '/user/cart'},
  ]
  return (
    <Grid sx={{mt: 4}} container>
      <Grid item xs={2}>
        <Stack spacing={3}>
          <Typography variant='h6' align='center'>Меню</Typography>
            <ButtonGroup orientation='vertical' fullWidth>
                {userNav.map((item: any, index: number) => {
                    console.log(item)
                    return (
                        <NavLink 
                            key={index} 
                            to={item.href}
                            >
                            <Button variant='text'>
                              {item.name}
                            </Button>
                        </NavLink>
                    )
                })}
            </ButtonGroup>
          </Stack>
        </Grid>
        <Outlet />
    </Grid>
  )
}
