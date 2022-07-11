import styles from './NavigationPage.module.scss';

const NavigationPage = () => {
    return (
        <nav className={styles.nav}>
            <h2 className={styles.head}>Меню</h2>
            <ul className={styles.list}>
                <li className={styles.item}><a href="">Автоматы</a> </li>
                <li className={styles.item}><a href="">Дробовики</a> </li>
                <li className={styles.item}><a href="">Пистолеты</a> </li>
                <li className={styles.item}><a href="">Гранаты</a> </li>
                <li className={styles.item}><a href="">Мины</a> </li>
            </ul>
        </nav>
    )
}

export default NavigationPage