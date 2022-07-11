import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
    changeCurrency, 
    changeLanguage, 
    IstateHead, 
    openChats, 
    openCartPreview } from '../../store/headerReduser';
import BurgerMenu from '../burger-menu/BurgerMenu';
import Cart from '../cart/Cart';
import ChatHelp from '../chat-help/ChatHelp';
import Search from '../search/Search';
import styles from './HeaderItemTop.module.scss';

const HeaderItemTop = () => {
    const navigate = useNavigate();
    const { language, currency, stateChat, stateCart }: IstateHead = useSelector((state: any) => state.header)
    const dispatch = useDispatch()

    const goToUser = () => {
        navigate('/user')
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.setting}>
                    <div className={styles.currency}>
                        <select className={styles.select} value={currency} onChange={(e) => dispatch(changeCurrency(e.target.value))}>
                            <option className={styles.option} value="usd">USD</option>
                            <option className={styles.option} value="rub">RUB</option>
                            <option className={styles.option} value="eur">EUR</option>
                        </select>
                    </div>
                    <div className={styles.language}>
                    <select className={styles.select} value={language} onChange={(e) => dispatch(changeLanguage(e.target.value))}>
                            <option className={styles.option} disabled>Язык</option>
                            <option className={styles.option} value="ru">Русский</option>
                            <option className={styles.option} value="en">English</option>
                        </select>
                    </div>
                </div>
                <div className={styles.user}>
                    <div className={styles.help} onClick={() => dispatch(openChats())}>
                        Нужна помощь? Напиши в чат
                    </div>
                    {stateChat && <ChatHelp />}
                    <div className={styles.account} onClick={goToUser}></div>
                    <div className={styles.cart} onClick={() => dispatch(openCartPreview())}></div>
                    {stateCart && <Cart />}
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles['logo-container']}>
                    <NavLink to='/'><div className={styles.logo}></div></NavLink>
                </div>
                <BurgerMenu />
                <div className={styles.contact}>
                    <h2 className={styles['contact-name']}>Контакт центр</h2>
                    <a className={styles['contact-ref']} href="tel:800000000">+890231232134</a>
                </div>
                <Search />
            </div>
        </div>
    )
}

export default HeaderItemTop

function openChat(): any {
    throw new Error('Function not implemented.');
}
