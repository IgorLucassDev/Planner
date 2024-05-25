import styles from './Task.module.css';

export default ({title, date}) =>{
    return(
        <>
            <div className={styles.Container}>
                <p className={styles.title}>{title} </p>
                <strong><p className={styles.date}> - {date}</p></strong>
            </div>
        </>
    )
}