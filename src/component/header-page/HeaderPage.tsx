import { AccountCircle, More } from '@mui/icons-material';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChairIcon from '@mui/icons-material/Chair';
import Search from '../search/Search';
import { AppBar, Badge, Box, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { IstateHead, openCartPreview } from '../../store/headerReduser';
import Cart from '../cart/Cart';
import SingIn from '../login/Login';

export default function HeaderPage() {
    const navigate = useNavigate()
    const { isActive } = useSelector((state: any) => state.user);
    const { stateChat, stateCart }: IstateHead = useSelector((state: any) => state.header);
    const [open, setOpen] = useState(false);
    
    const dispatch = useDispatch();

    const handleOpen = () => { 
        isActive ? navigate('/user') : setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
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
                    {isActive ? <IconButton size="large" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <FavoriteIcon />
                        </Badge>
                    </IconButton> : null}
                    <IconButton
                    size="large"
                    color="inherit"
                    onClick={() => dispatch(openCartPreview())}
                    >
                        <Badge badgeContent={17} color="error">
                            <ShoppingBasketIcon />
                        </Badge>
                        {stateCart && <Cart />}
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
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    color="inherit"
                    >
                        <More />
                    </IconButton>
                </Box>
            </Toolbar>
            <Toolbar >
                <nav>
                    <Stack direction='row' spacing={7} ml={27}>
                        {navigationMenu.map((item) => {
                            return (
                                <NavLink to={item.href}>
                                    <Button variant='text' sx={{color: 'white'}}>
                                        {item.name}
                                    </Button>
                                </NavLink>
                            )
                        })}
                    </Stack>
                </nav>
            </Toolbar>
        </AppBar> 
  )
}
