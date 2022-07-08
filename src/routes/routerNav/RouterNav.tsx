import { Fragment } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import HeaderItemTop from '../../component/header-item-top/HeaderItemTop';
import Navigation from '../../component/navigation/Navigation';
import styles from './RouterNav.module.scss';

const RouterNav = () => {
    return (
        <Fragment>
            <Navigation />
            <main className={styles.main}>
                <Outlet />
            </main>
        </Fragment>
    )
}

export default RouterNav