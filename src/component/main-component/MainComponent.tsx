import { Box, CircularProgress, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import Content from '../content-component/Content';
import NavigationPage from '../navigation-page/NavigationPage';
import styles from './nComponent.module.scss';

const nComponent = (props: any) => {
    // const products = useSelector((state: any) => state.main.products)
    const listMenu = [
        {id: 'one',name: 'Первое'},
        {id: 'two',name: 'Второе'},
        {id: 'three',name: 'Третие'},
        {id: 'four',name: 'Четвертое'},
        {id: 'five',name: 'Пятое'},
    ]
    return (
        <Box>
            <Stack direction='row' spacing={3} mt={4}>
                <NavigationPage navMenu={listMenu}/>
                <Content/>
            </Stack>
        </Box>
    )
}

export default nComponent