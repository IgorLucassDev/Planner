import styles from './Modal.module.css';

export default () =>{
    return(
        <>
            <div className={styles.modal}>
                <h1>Add Task</h1>
                <div>
                    <form className={styles.Container} action="#">
                        <label htmlFor="title">Digite um título</label>
                        <input className={styles.formInput} type="text" />
                        <label htmlFor="date">Digite uma data</label>
                        <input className={styles.formInput} type="text" />
                        <input className={styles.submitButton} type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
        </>
    )
}