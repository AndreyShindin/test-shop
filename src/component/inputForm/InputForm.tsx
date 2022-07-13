import styles from './InputForm.module.scss';



const InputForm = (props: any) => {
    const {label, ...otherProps} = props
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={props.name}>
                {props.label}
            </label>
            <input
                className={styles.input} 
                {...otherProps}/>
        </div>
    )
}

export default InputForm