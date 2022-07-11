import { useState } from 'react';
import HomeCategory from '../home-category/HomeCategory';
import styles from './Slide.module.scss';

const Slide = () => {
    const [slide, changeSlide] = useState(true);
    let style = {
        display: "none",
    }
    
    function chanesSlider() {
        slide ? style.display = "inline" : style.display = "none";
        changeSlide(!slide)
    }
     
    return(
        <div className={styles.slides}>
            <div className={styles['slider-bar']}>
                <img className={styles.slide} src="https://mebelfon.ru/upload/iblock/d62/koenvengedubvengemagiya.jpg" alt="slide1" />
                {/* <img className={styles.slide} style={style} src="https://320601.selcdn.ru/netangels/iblock/68c/e9f0a3b323b05115d6035f5ce4b6d802.jpg" alt="slide2" /> */}
                {/* <img className={styles.slide} style={style} src="https://www.mebel-top.ru/images/prihozhaj_fataim-mebel-top.jpg" alt="slide3" /> */}
            </div>
            <div className={styles.selectors}>
                {/* <span className={styles.selector} onClick={() => }>1</span> */}
                {/* <span className={styles.selector} onClick={() => changeSlide(!slide)}>2</span> */}
                {/* <span className={styles.selector} onClick={() => changeSlide(!slide)}>3</span> */}
            </div>
        </div>
    )
}

export default Slide