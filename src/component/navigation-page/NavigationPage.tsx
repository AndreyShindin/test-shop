import { Box, Paper, Stack, Typography } from '@mui/material';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { StringMappingType } from 'typescript';
import styles from './NavigationPage.module.scss';

const NavigationPage = (props: any) => {
    const mainLink = useLocation().pathname
    const navMenu = props.navMenu;
    return (
        <Stack spacing={3}>
            <Typography variant='h6' align='center'>Меню</Typography>
            <Paper>
                <Stack spacing={3} p={3} sx={{width: '200px'}}>
                    {navMenu.map((item: any, index: number) => {
                        return (
                            <Box key={item.name.length+index}>
                                <NavLink to={`/${mainLink}/${item.link}`}>{item.name}</NavLink>
                            </Box>
                        )
                    })}
                </Stack>
            </Paper>
        </Stack>
    )
}

export default NavigationPage