import { useState } from 'react';
import { FunctionBody } from 'typescript';
import styles from './BurgerMenu.module.scss';



const BurgerMenu = () => {
    const [stateMenu, changeStateMenu]: any = useState(false);
    let openMenu = stateMenu ? '-open': '';
    return (
        <div className={styles.main}>
            <div className={styles[`menu${openMenu}`]} onClick={() => changeStateMenu(!stateMenu)}>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
                <span className={styles.line}></span>
            </div>
            {openMenu && 
                <div className={styles['container-menu']}>
                    <ul className={styles.list}>
                        <li className={styles.item}>О нас</li>
                        <li className={styles.item}>О нас</li>
                        <li className={styles.item}>О нас</li>
                        <li className={styles.item}>О нас</li>
                        <li className={styles.item}>О нас</li>
                    </ul>
                </div>}
        </div>
    )
}

export default BurgerMenu