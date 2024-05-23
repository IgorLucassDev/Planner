import styles from './Modal.module.css';

import { useState } from 'react';

export default ({setModalActive}) =>{

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDate, setTaskDate] = useState('')

    const submitForm = (e) =>{
        e.preventDefault()
        const task = [{
            title: taskTitle,
            date: taskDate
        }]

        console.log(task)

        setModalActive(false)
        
    }

    return(
        <>
            <div className={styles.modal}>
                <h1>Add Task</h1>
                <div>
                    <form onSubmit={submitForm} className={styles.Container} action="#">
                        <label htmlFor="title">Digite um título</label>
                        <input className={styles.formInput} type="text" onChange={e => setTaskTitle(e.target.value)} />
                        <label htmlFor="date">Digite uma data</label>
                        <input className={styles.formInput} type="text" onChange={e => setTaskDate(e.target.value)} />
                        <input className={styles.submitButton} type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
        </>
    )

}