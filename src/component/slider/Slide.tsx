import { Box, Container, IconButton, ImageList, Paper, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import styles from './Slide.module.scss';

const Slide = () => {
    const [slide, changeSlide] = useState(0)
    const slides = [
        {imgUrl: 'https://mebelfon.ru/upload/iblock/d62/koenvengedubvengemagiya.jpg', description: 'text'},
        {imgUrl: 'https://ae04.alicdn.com/kf/HTB13drBHVXXXXb.XVXXq6xXFXXXi/2017.jpg', description: 'text'},
        {imgUrl: 'https://mebelfon.ru/upload/iblock/d62/koenvengedubvengemagiya.jpg', description: 'text'},
        {imgUrl: 'https://www.mebel-top.ru/images/gostinaj-9-mebel-top.jpg', description: 'text'},
    ]
    

    const nextSlide = () => {
        let a = slide + 1
        if(a > 3){
            changeSlide(0)
        } else {
            changeSlide(a)
        }
    }
    const prevSlide = () => {
        let a = slide - 1
        if(a < 0) {
            changeSlide(slides.length - Math.abs(a))  
        } else {
            changeSlide(a)
        }
    }

    console.log(slide)
     
    return(
        <Container>
                <Box sx={{ 
                    maxWidth: "900px", 
                    maxHeight: '400px',
                    m: 'auto',
                    mt: '20px',
                    position: 'relative'}}>
                    <Box>
                        <img src={slides[slide].imgUrl} alt="slide1" style={{width: '100%', height: '400px', borderRadius: '25px'}}/>
                        <Typography variant='h6' sx={{
                            color:'#f2f2f2',
                            fontSize: '15px',
                            padding: '8px 12px',
                            position: 'absolute',
                            bottom: '8px',
                            width: '100%',
                            textAlign: 'center',
                        }}>
                            {slides[slide].description}
                        </Typography>
                    </Box>
                    <IconButton sx={{
                        position: 'absolute',
                        left: '0',
                        top: "0",
                        height: '100%'}}
                        onClick={prevSlide}>
                        <KeyboardArrowLeftIcon sx={{color:'white'}}/>
                    </IconButton>
                    <IconButton sx={{
                        position: 'absolute',
                        top: "0",
                        right: '0',
                        height: '100%'}}
                        onClick={nextSlide}>
                        <KeyboardArrowRightIcon sx={{color:'white'}}/>
                    </IconButton>
                </Box>
        </Container>
    )
}

export default Slide