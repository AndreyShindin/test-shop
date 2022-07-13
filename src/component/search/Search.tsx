import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Search.module.scss';

const Search = () => {
    const [requestSearch, changeSearch] = useState('');
    const main = useSelector((state: any) => state.main);
    
    let result: Array<any> = [];
    const search = (request: string) => {
        for(let key in main) {
            for(let i of main[key]){
                if(i.name.toLowerCase().includes(request.toLocaleLowerCase())){
                    // console.log(i);
                    result.push(i)
                }
            }
        }
    }

    return (
        <div className={styles.container}>
            <input 
                className={styles.search} 
                type="search" 
                placeholder='Поиск'
                onChange={(e) =>  changeSearch(e.target.value)}/>
            <button className={styles.button} onClick={() =>search(requestSearch)}>Поиск</button>
            {requestSearch ? 
            <div className={styles.content}>
                {result.map((res) => {
                    return (
                        <li>
                            {res}
                        </li>
                    )
                })}
            </div>
            : null}
            
        </div>
    )
}

export default Search