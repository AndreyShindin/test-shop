import { Fragment } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Navigation.module.scss';

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink className={styles.link} to='/livingroom'>Гостинная</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink className={styles.link} to='/bedroom'>Спальня</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink className={styles.link} to='/kitchen'>Кухня</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink className={styles.link} to='/bathroom'>Ванная</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink className={styles.link} to='/wardrobe'>Гардероб</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink className={styles.link} to='/garden'>Сад</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation