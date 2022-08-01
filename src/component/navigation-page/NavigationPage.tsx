import { Button, ButtonGroup, Paper, Stack, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';

const NavigationPage = (props: any) => {
    const { navMenu } = props;
    return (
        <Stack spacing={3}>
            <Typography variant='h6' align='center'>Меню</Typography>
            <Paper>
                <ButtonGroup orientation='vertical'>
                    {navMenu.map((item: any, index: number) => {
                        return (
                            <Button 
                                key={item.id}  
                                sx={{padding: '10px 45px'}} 
                                variant='text' 
                                fullWidth
                                >
                                {item.name}
                            </Button>
                        )
                    })}
                </ButtonGroup>
                <Outlet />
            </Paper>
        </Stack>
    )
}

export default NavigationPage