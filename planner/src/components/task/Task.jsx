import styles from './Task.module.css';

export default ({title, date, key}) =>{
    return(
        <>
            <div key={key} className={styles.Container}>
                <p className={styles.title}>{title} </p>
                <strong><p className={styles.date}> - {date}</p></strong>
            </div>
        </>
    )
}