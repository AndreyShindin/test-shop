import styles from './HomeCategory.module.scss';

const HomeCategory = (props: any) => {
    const { link, name } = props.category
    return (
        <li className={styles.item}>
            <a href={link} className={styles.link}>
                <div className={styles.category}>
                    <h6 className={styles.name}>
                        {name}
                    </h6>
                    <img className={styles.image} src="https://orekhovo-zuevo.divanchik-ekb.ru/files/originals/brayton_1.jpg" alt="category" />
                </div>    
            </a> 
        </li>
    )
}

export default HomeCategory