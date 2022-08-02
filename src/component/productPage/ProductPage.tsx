import { Button, Container, FormControl, FormLabel, Grid, ImageList, ImageListItem, RadioGroup, Stack, Typography, FormControlLabel, Radio, Box} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { useLocation, useNavigate } from 'react-router-dom';
import { addProductFavorite, addProductBasket } from '../../store/mainReducer';
import DrawerAddres from '../drawer-addres/DrawerAddres';
import { useEffect, useState } from 'react';
import { fetchProduct } from '../../store/now/productReducer';




const ProductPage = () => {
    const [drawerOpen, setDraweOpen] = useState(false);
    const [colorProd, setColor] = useState('');

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const idProd = useLocation();

    useEffect(() => {
        dispatch(fetchProduct(idProd))
    }, [])


    const prodCart = {id: 1, name: 'Кровать', price: 23463, imageUrl: 'https://i.pinimg.com/736x/58/be/d5/58bed5c15abf833f5229928bdf4eb5c0--couch.jpg', description: '', avColor: [{idColor: 'yellow', color:'Желтый'}, {idColor: 'blue', color:'Синий'}, {idColor: 'red', color:'Красный'},]}
    const itemData = [
        {img: 'https://img2.goodfon.ru/original/1280x800/f/39/gostinnaya-divan-kresla-stol.jpg', title: 'Title'},
        {img: 'https://eskipaper.com/images/kitchen-wallpaper-10.jpg', title: 'Title'},
        {img: 'https://mebelvenera.ru/upload/iblock/92f/stenka-treyd_1-_1_.jpg', title: 'Title'},

    ];

    const handleNavigete = () => {
        navigate(-1)
    }
    
    const handleClose = () => {
        setDraweOpen(false)
    }

    const addFavoriteProd = () => {
        if (colorProd) {
            dispatch(addProductFavorite({colorProd, ...prodCart}))
        }  
    }

    const addBasketProd = () => {
        if (colorProd) {
            dispatch(addProductBasket({colorProd, ...prodCart}))
        }  
    }

    const changeColor = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColor(event.target.value)
    }  
    
    
   
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
                            <Button 
                                fullWidth 
                                variant='outlined'
                                onClick={addFavoriteProd}
                                > 
                                Добавить в избранное
                            </Button>
                            <Typography variant='h3'>
                                {prodCart.name}
                            </Typography>
                            <Typography variant='subtitle2'>
                                {prodCart.price} руб
                            </Typography>
                            <FormControl required>
                                <FormLabel id='color' error={!colorProd}>
                                    Выберите цвет
                                </FormLabel>
                                <RadioGroup 
                                    name='color' 
                                    row
                                    value={colorProd} 
                                    onChange={changeColor}>
                                    {prodCart.avColor.map((item) => {
                                        return (
                                            <FormControlLabel control={<Radio size='small'/>} label={item.color} value={item.idColor}/>
                                        )
                                    })}
                                </RadioGroup>
                            </FormControl>
                            <Button 
                                fullWidth 
                                variant='contained' 
                                onClick={addBasketProd}
                                >
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