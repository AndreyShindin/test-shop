import { useState } from 'react';
import { useSelector } from 'react-redux';
import Product from '../product/Product';
import styles from './Content.module.scss';

const Content = (props: any) => {
    const [stateSelect, changeSelect] = useState('default');
    const {currency, rate} = useSelector((state: any) => state.header)

    let forex = 'руб';
    if(currency == 'rub'){
        forex = 'руб'
    } else if (currency == 'usd') {
        forex = '$'
    } else {
        forex = 'e'
    } 

    let sortProdocts = [...props.products];
    if(stateSelect === "ascending"){
        sortProdocts.sort(function (a: any, b: any) {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            
            return 0;
          });
    } else if (stateSelect === "descending"){
        sortProdocts.sort(function (a: any, b: any) {
            if (a.price > b.price) {
              return 1;
            }
            if (a.price < b.price) {
              return -1;
            }
            
            return 0;
          });
        sortProdocts.reverse();
    }

    

    return (
        <div className={styles.conatiner}>
            <div className={styles.filter}>
                <select className={styles['filter-select']} value={stateSelect} onChange={(e) => changeSelect(e.target.value)}>
                    <option value="default">По умолчанию</option>
                    <option value="ascending">По цене, по возрастанию</option>
                    <option value="descending">По цене, по убыванию</option>
                </select>
                <button className={styles['filter-button']}>
                    Фильтр
                </button>
            </div>
            <div className={styles.content}>
                <ul className={styles.list}>
                    {sortProdocts.map((product: any) => {
                        return (
                            <Product key={product.id} product={product} currency={forex} rate={rate}/>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Content

function sortProducts() {
    throw new Error('Function not implemented.');
}
