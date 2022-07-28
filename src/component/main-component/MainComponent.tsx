import { Box, Stack } from '@mui/material';
import Content from '../content-component/Content';
import NavigationPage from '../navigation-page/NavigationPage';
import styles from './MainComponent.module.scss';

const MainComponent = (props: any) => {
    const products = props.products;
    const listMenu = [
        {name: 'Первое', link: 'odin', mainLink: 'user'},
        {name: 'Второе', link: 'dwa', mainLink: 'user'},
        {name: 'Третие', link: 'tri', mainLink: 'user'},
        {name: 'Четвертое', link: 'chetare', mainLink: 'user'},
        {name: 'Пятое', link: 'pit', mainLink: 'user'},
    ]
    return (
        <Box>
            <Stack direction='row' spacing={3} mt={4}>
                <NavigationPage navMenu={listMenu}/>
                <Content products={products}/>
            </Stack>
        </Box>
    )
}

export default MainComponent