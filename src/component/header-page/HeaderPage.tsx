import { AccountCircle } from '@mui/icons-material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChairIcon from '@mui/icons-material/Chair';
import Search from '../search/Search';
import { AppBar, Badge, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import { useAppSelector } from '../../store/hook';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SingIn from '../login/Login';

export default function HeaderPage() {
    const navigate = useNavigate()
    const { isActive } = useAppSelector((state) => state.user);
    const { favorite, cart } = useAppSelector((state) => state.main);
    const [open, setOpen] = useState(false);
    

    const handleOpen = () => { 
        isActive ? navigate('/user/client') : setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleAdmin = () => {
        navigate('/admin')
    }
    
    
    const navigationMenu = [
        {href: '/livingroom', name: 'Гостинная'},
        {href: '/bedroom', name: 'Спальня'},
        {href: '/kitchen', name: 'Кухня'},
        {href: '/bathroom', name: 'Ванная'},
        {href: '/wardrobe', name: 'Гардероб'},
        {href: '/garden', name: 'Сад'},
    ]
    return (
        <AppBar position='static'>
            <Toolbar sx={{justifyContent: 'space-between'}}>
                <NavLink to='/'>
                    <IconButton size="large" disableTouchRipple sx={{color: 'white'}}> 
                        <ChairIcon />
                        <Typography ml={1}>Shop furniture</Typography>
                    </IconButton>
                </NavLink>
                <Search />
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {isActive ? <Button color='inherit' onClick={handleAdmin}>
                        Панель администратора
                    </Button> : null}
                    {isActive ? <IconButton size="large" color="inherit" onClick={() => navigate('/user/favorite')}>
                        <Badge badgeContent={favorite.length} color="error">
                            <FavoriteIcon />
                        </Badge>
                    </IconButton> : null}
                    <IconButton
                    size="large"
                    color="inherit"
                    onClick={() => navigate('/user/cart')}
                    >
                        <Badge badgeContent={cart.length} color="error">
                            <ShoppingBasketIcon />
                        </Badge>
                        {/* {stateCart && <Cart />} */}
                    </IconButton>
                    <IconButton
                    size="large"
                    color="inherit"
                    onClick={handleOpen}
                    >
                        <AccountCircle />
                    </IconButton>
                    <SingIn open={open} close={handleClose}/>
                </Box>
            </Toolbar>
            <Toolbar sx={{justifyContent: 'space-around'}} component='nav'>
                {navigationMenu.map((item, index) => {
                    return (
                        <NavLink key={item.href} to={item.href}>
                            <Button variant='text' sx={{color: 'white'}}>
                                {item.name}
                            </Button>
                        </NavLink>
                    )
                })}
            </Toolbar>
        </AppBar> 
  )
}
