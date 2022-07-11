import { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Search.module.scss';

const Search = () => {
    const [resultSearch, changeSearch] = useState('');
    const main = useSelector((state: any) => state.main);

    let result: Array<any> = [];
    // const searth = (required: string) => {
    //     for(let key in main){
    //         for(let i of main[key]){         
    //             if(i.name.toLowerCase() == required.toLowerCase()){
    //                 console.log(main[key])
    //             }
    //         }
    //     }
    // }

    // searth('kitchen');

    // console.log(result);

    let a = [
          {name: 'a'},
          {name: 'b'},
          {name: 'c'},  
    ]
    console.log(result.length)

    const search = (event: string) => {
        changeSearch(event);
        for(let i in a){
            if(a[i].name == event){
                result.push(event)
            }
        }
    }

    return (
        <div className={styles.container}>
            <input 
                className={styles.search} 
                type="text" 
                placeholder='Поиск'
                onChange={(e) =>  search(e.target.value)}/>
            <button className={styles.button}>Поиск</button>
            {resultSearch ? 
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