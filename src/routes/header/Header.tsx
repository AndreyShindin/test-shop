import { Fragment } from 'react';
import HeaderItemTop from '../../component/header-item-top/HeaderItemTop';
import RouterNav from '../routerNav/RouterNav';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <Fragment>
            <header>
                <HeaderItemTop />
            </header>
            <RouterNav />
        </Fragment>
    )
}

export default Header