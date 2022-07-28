import { Button, Container, FormControl, FormLabel, Grid, ImageList, ImageListItem, RadioGroup, Stack, Typography, FormControlLabel, Radio, Box} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCartItem } from '../../store/cartReducer';
import DrawerAddres from '../drawer-addres/DrawerAddres';




const ProductPage = () => {
    const prodCart = {id: 1, name: 'Кровать', price: 23463, imageUrl: 'https://i.pinimg.com/736x/58/be/d5/58bed5c15abf833f5229928bdf4eb5c0--couch.jpg', description: ''}
    
    const [drawerOpen, setDraweOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleNavigete = () => {
        navigate(-1)
    }
    
    const handleClose = () => {
        setDraweOpen(false)
    }
    const itemData = [
        {img: 'https://img2.goodfon.ru/original/1280x800/f/39/gostinnaya-divan-kresla-stol.jpg', title: 'Title'},
        {img: 'https://eskipaper.com/images/kitchen-wallpaper-10.jpg', title: 'Title'},
        {img: 'https://mebelvenera.ru/upload/iblock/92f/stenka-treyd_1-_1_.jpg', title: 'Title'},

    ]
    return (
        <Container sx={{mt: 3}}>
                <Button onClick={handleNavigete}>
                    Назад
                </Button>
                <Grid container spacing={3}>
                    <Grid xs={8} item>
                        <ImageList sx={{ width: "100%" }} cols={1} rowHeight={450}>
                            {itemData.map((item) => (
                                <ImageListItem key={item.img} sx={{mb: '50px'}}>
                                <img
                                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <Grid id='params' container spacing={3}>
                            <Typography gutterBottom>
                                Харакстеристики
                            </Typography>
                            <Grid item>
                                <Box>
                                    <Typography gutterBottom>
                                        Размеры
                                    </Typography>
                                    <Stack spacing={3}>
                                        <Typography>
                                            Длина: 
                                        </Typography>
                                        <Typography>
                                            Ширина:
                                        </Typography>
                                        <Typography>
                                            Высота:
                                        </Typography>
                                    </Stack>
                                </Box>
                            </Grid>
                            <Grid item>
                                <Stack spacing={3}>
                                    <Typography>
                                        Материал: 
                                    </Typography>
                                    <Typography>
                                        Цвет:
                                    </Typography>
                                    <Typography>
                                        Ткань:
                                    </Typography>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid xs={4} item>
                        <Stack spacing={3}>
                            <Button fullWidth variant='outlined'> 
                                Добавить в избранное
                            </Button>
                            <Typography variant='h3'>
                                Имя товара
                            </Typography>
                            <Typography variant='subtitle2'>
                                Прайс цена руб
                            </Typography>
                            <FormControl>
                                <FormLabel id='color'>
                                    Выберите цвет
                                </FormLabel>
                                {/* value={first} onChange={handleChange} */}
                                <RadioGroup name='color' row>
                                    <FormControlLabel control={<Radio size='small'/>} label='цвет1' value='1'/>
                                    <FormControlLabel control={<Radio size='small'/>} label='цвет2' value='2'/>
                                    <FormControlLabel control={<Radio size='small'/>} label='цвет3' value='3'/>
                                </RadioGroup>
                            </FormControl>
                            <Button fullWidth variant='contained' onClick={() => dispatch(addCartItem(prodCart))}>
                                В корзину
                            </Button>
                            <Button onClick={() => setDraweOpen(true)}>
                                Доставка и сборка
                            </Button>
                            <DrawerAddres open={drawerOpen} handleClose={handleClose}/>
                            <Button href='#params'>
                                Харакстеристики
                            </Button>
                        </Stack>
                    </Grid>
                </Grid>
        </Container>
    )
}

export default ProductPage