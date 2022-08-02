import { Box, Stack } from '@mui/material';
import Content from '../content-component/Content';
import NavigationPage from '../navigation-page/NavigationPage';

const MainComponent = () => {   
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
                <Content />
            </Stack>
        </Box>
    )
}

export default MainComponent