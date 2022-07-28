import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderPage from '../../component/header-page/HeaderPage';

const Header = () => {
    return (
        <Fragment>
            <header>
                <HeaderPage />
            </header>
            <main>
                <Outlet />
            </main>
        </Fragment>
    )
}

export default Header