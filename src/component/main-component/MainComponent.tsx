import Content from '../content-component/Content';
import NavigationPage from '../navigation-page/NavigationPage';
import styles from './MainComponent.module.scss';

const MainComponent = (props: any) => {
    const products = props.products;
    return (
        <div className={styles.container}>
            <NavigationPage />
            <Content products={products}/>
        </div>
    )
}

export default MainComponent